#target photoshop

// Script Vibe-coded with ChatGPT by Stéphane BARIL (@sbaril on X/Twitter) 
// The default script is Unhide all non-locked layers/groups on the active document
// In the config section below, you can disable the Pop-up notification (SHOW_POPUP) or define is duration on screen (POPUP_DURATION) and, decide to unhide alos the locked layers/groups

// ====================== CONFIG ======================
var SHOW_POPUP   = true;     // Set false to disable transient message
var POPUP_DURATION = 900;    // ms
var DEBUG_LOG    = false;    // Console logging
var CHUNK        = 512;      // Batch size for AM show/hide
var SKIP_LOCKED  = true;     // <<— NEW: skip locked layers/groups entirely
// ====================================================

var STORE_KEY = stringIDToTypeID("unhideLayers_toggle_store_perf_v2");

// ---------- Logging ----------
function log(s){ if (DEBUG_LOG) $.writeln("[UnhideToggle] " + s); }

// ---------- Unicode ✓ popup ----------
function flashPopup(msg, ms) {
    if (!SHOW_POPUP) return;
    var w = new Window("palette", "Notification", undefined, { closeButton: false });
    w.alignChildren = "left";
    var txt = w.add("statictext", undefined, "\u2713 " + msg);
    txt.characters = Math.max(28, (msg.length + 6));
    w.layout.layout(true);
    w.center();
    w.show();
    app.refresh();
    $.sleep(ms);
    w.close();
}

// ---------- Fast doc signature (AM documentID) ----------
function getDocumentId() {
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    var desc = executeActionGet(ref);
    return desc.getInteger(stringIDToTypeID("documentID"));
}

// ---------- Batch AM show/hide ----------
function showMany(ids) {
    if (!ids || !ids.length) return;
    for (var i = 0; i < ids.length; i += CHUNK) {
        var end = Math.min(i + CHUNK, ids.length);
        var list = new ActionList();
        for (var j = i; j < end; j++) {
            var r = new ActionReference();
            r.putIdentifier(charIDToTypeID("Lyr "), ids[j]);
            list.putReference(r);
        }
        var d = new ActionDescriptor();
        d.putList(charIDToTypeID("null"), list);
        try { executeAction(stringIDToTypeID("show"), d, DialogModes.NO); } catch(e) {}
    }
}

function hideMany(ids) {
    if (!ids || !ids.length) return;
    for (var i = 0; i < ids.length; i += CHUNK) {
        var end = Math.min(i + CHUNK, ids.length);
        var list = new ActionList();
        for (var j = i; j < end; j++) {
            var r = new ActionReference();
            r.putIdentifier(charIDToTypeID("Lyr "), ids[j]);
            list.putReference(r);
        }
        var d = new ActionDescriptor();
        d.putList(charIDToTypeID("null"), list);
        try { executeAction(stringIDToTypeID("hide"), d, DialogModes.NO); } catch(e) {}
    }
}

// ---------- Lock detection (DOM + AM fallback) ----------
function isLocked(lyr) {
    // Quick DOM checks (fast; present on most versions)
    try {
        if (lyr.allLocked) return true;
        if (lyr.positionLocked) return true;
        if (lyr.pixelLocked) return true;
        if (lyr.transparentPixelsLocked) return true;
    } catch (e) {}

    // AM fallback: read layerLocking object when available
    try {
        var ref = new ActionReference();
        ref.putIdentifier(charIDToTypeID("Lyr "), lyr.id);
        var desc = executeActionGet(ref);

        // Some builds expose a 'layerLocking' object
        var s_layerLocking = stringIDToTypeID("layerLocking");
        if (desc.hasKey(s_layerLocking)) {
            var lockDesc = desc.getObjectValue(s_layerLocking);
            var keys = [
                "protectAll",              // full lock
                "protectPosition",         // position lock
                "protectTransparency",     // transparency lock
                "protectComposite"         // painting/composite lock
            ];
            for (var i = 0; i < keys.length; i++) {
                var sid = stringIDToTypeID(keys[i]);
                if (lockDesc.hasKey(sid) && lockDesc.getBoolean(sid)) return true;
            }
        }

        // Background layer cannot be hidden—treat as locked for our purposes
        var s_background = stringIDToTypeID("background");
        if (desc.hasKey(s_background) && desc.getBoolean(s_background)) return true;

    } catch (e2) {}

    return false;
}

// ---------- Single-pass, non-recursive traversal with optional skip-locked ----------
function collectStatesAndAllIds(doc) {
    var hiddenGroups = []; // groups hidden by themselves (no hidden ancestor)
    var hiddenLayers = []; // layers hidden by themselves (no hidden ancestor)
    var allGroups    = []; // all group IDs (for unhide)
    var allLayers    = []; // all layer IDs (for unhide)

    var stack = []; // { node, parentHidden }
    var L0 = doc.layers;
    for (var i = L0.length - 1; i >= 0; i--) stack.push({ node: L0[i], parentHidden: false });

    while (stack.length) {
        var cur = stack.pop();
        var lyr = cur.node;

        // Skip locked if requested
        if (SKIP_LOCKED && isLocked(lyr)) {
            // For a locked GROUP, we also skip its subtree for speed and consistency
            continue;
        }

        var isGroup = (lyr.typename === "LayerSet");
        var thisHidden = false;
        try { thisHidden = !lyr.visible; } catch (e) { thisHidden = false; }

        if (isGroup) {
            allGroups.push(lyr.id);
            // top-most hidden ancestor group
            if (thisHidden && !cur.parentHidden) hiddenGroups.push(lyr.id);

            // push children with updated parentHidden
            var kids = lyr.layers;
            var nextParentHidden = cur.parentHidden || thisHidden;
            for (var k = kids.length - 1; k >= 0; k--) {
                var kid = kids[k];
                if (SKIP_LOCKED && isLocked(kid)) {
                    // skip locked child right here
                    continue;
                }
                stack.push({ node: kid, parentHidden: nextParentHidden });
            }
        } else {
            allLayers.push(lyr.id);
            // layer hidden by itself (all ancestors visible)
            if (thisHidden && !cur.parentHidden) hiddenLayers.push(lyr.id);
        }
    }

    return {
        hiddenGroups: hiddenGroups,
        hiddenLayers: hiddenLayers,
        allGroups: allGroups,
        allLayers: allLayers
    };
}

// ---------- Persistent store (hardened) ----------
function storeState(docId, hiddenGroups, hiddenLayers) {
    var desc = new ActionDescriptor();
    desc.putInteger(stringIDToTypeID("docId"), docId);

    var lg = new ActionList();
    for (var i = 0; i < hiddenGroups.length; i++) lg.putInteger(hiddenGroups[i]);
    desc.putList(stringIDToTypeID("hiddenGroups"), lg);

    var ll = new ActionList();
    for (var j = 0; j < hiddenLayers.length; j++) ll.putInteger(hiddenLayers[j]);
    desc.putList(stringIDToTypeID("hiddenLayers"), ll);

    app.putCustomOptions(STORE_KEY, desc, true);
}

function retrieveState() {
    var desc = app.getCustomOptions(STORE_KEY); // throws if missing
    var sid_docId = stringIDToTypeID("docId");
    if (!desc.hasKey(sid_docId)) {
        app.eraseCustomOptions(STORE_KEY);
        throw new Error("Invalid stored state cleared.");
    }
    var out = {
        docId: desc.getInteger(sid_docId),
        hiddenGroups: [],
        hiddenLayers: []
    };
    var sid_g = stringIDToTypeID("hiddenGroups");
    if (desc.hasKey(sid_g)) {
        var lg = desc.getList(sid_g);
        for (var i = 0; i < lg.count; i++) out.hiddenGroups.push(lg.getInteger(i));
    }
    var sid_l = stringIDToTypeID("hiddenLayers");
    if (desc.hasKey(sid_l)) {
        var ll = desc.getList(sid_l);
        for (var j = 0; j < ll.count; j++) out.hiddenLayers.push(ll.getInteger(j));
    }
    return out;
}

function clearStoredState() {
    try { app.eraseCustomOptions(STORE_KEY); } catch (e) {}
}

// ========================== MAIN ==========================
if (app.documents.length === 0) {
    alert("No document is open.");
} else {
    var doc = app.activeDocument;
    var docId = getDocumentId();
    log("DocID: " + docId + " | SKIP_LOCKED=" + SKIP_LOCKED);

    var haveStored = false, stored = null;
    try {
        stored = retrieveState();
        haveStored = (stored.docId === docId);
        if (!haveStored) clearStoredState(); // state belongs to another doc
    } catch (e) {
        haveStored = false;
    }

    if (haveStored) {
        // --------- RUN #2: RESTORE ----------
        doc.suspendHistory("Restore hidden layers", "doRestore()");
        function doRestore() {
            if (stored.hiddenGroups.length) hideMany(stored.hiddenGroups);
            if (stored.hiddenLayers.length) hideMany(stored.hiddenLayers);
            clearStoredState();
        }
        flashPopup("Restored previous hidden state.", POPUP_DURATION);

    } else {
        // --------- RUN #1: UNHIDE & STORE ----------
        doc.suspendHistory("Unhide layers", "doUnhideAndStore()");
        function doUnhideAndStore() {
            var st = collectStatesAndAllIds(doc);
            storeState(docId, st.hiddenGroups, st.hiddenLayers);

            // Unhide everything quickly: groups first, then layers
            if (st.allGroups.length) showMany(st.allGroups);
            if (st.allLayers.length) showMany(st.allLayers);
        }
        flashPopup("All layers visible. (Run again to restore)", POPUP_DURATION);
    }
}
