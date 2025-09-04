/** 
 * Rasterize All Smart Objects in the active PSD
 * - Recurses through all groups
 * - Handles locked layers (restores locks afterward)
 * - Skips non-smart layers
 * Tested in recent Photoshop versions using ExtendScript
 */

#target photoshop
app.displayDialogs = DialogModes.NO;

// -----------------------------
// User options
// -----------------------------
var OPTIONS = {
    showSummaryAlert: false // ⬅ set to false to disable popup summary
};

(function () {
    if (!app.documents.length) {
        alert("No document open.");
        return;
    }

    var doc = app.activeDocument;
    var totalRasterized = 0;

    // Suspend history for one clean undo step
    doc.suspendHistory("Rasterize All Smart Objects", "main()");

    function main() {
        var startActiveLayer = getActiveLayerSafe();
        traverseContainer(doc);

        // Restore original active layer if still valid
        if (startActiveLayer) {
            try { selectLayerById(startActiveLayer.id); } catch (e) {}
        }

        if (OPTIONS.showSummaryAlert) {
            alert("Rasterized Smart Objects: " + totalRasterized);
        }
    }

    function traverseContainer(container) {
        // Iterate from top to bottom to avoid index shifts
        for (var i = container.layers.length - 1; i >= 0; i--) {
            var lyr = container.layers[i];
            if (lyr.typename === "ArtLayer") {
                if (isSmartObject(lyr)) {
                    totalRasterized += rasterizeSmartObject(lyr) ? 1 : 0;
                }
            } else if (lyr.typename === "LayerSet") {
                traverseContainer(lyr);
            }
        }
    }

    function isSmartObject(layer) {
        // Use action descriptor to detect smartObject key
        var ref = new ActionReference();
        ref.putIdentifier(charIDToTypeID("Lyr "), layer.id);
        var desc = executeActionGet(ref);
        var soKey = stringIDToTypeID("smartObject");
        return desc.hasKey(soKey);
    }

    function rasterizeSmartObject(layer) {
        var relock = {
            all: false, position: false, pixels: false, transparentPixels: false
        };

        // Remember and clear locks (restore after)
        try {
            relock.all = layer.allLocked;
            if (relock.all) layer.allLocked = false;

            if ("positionLocked" in layer) { relock.position = layer.positionLocked; layer.positionLocked = false; }
            if ("pixelsLocked" in layer) { relock.pixels = layer.pixelsLocked; layer.pixelsLocked = false; }
            if ("transparentPixelsLocked" in layer) { relock.transparentPixels = layer.transparentPixelsLocked; layer.transparentPixelsLocked = false; }
        } catch (e) {}

        // Select the layer by ID to make sure the target is correct
        selectLayerById(layer.id);

        // Execute rasterize on the current target layer
        var ok = true;
        try {
            var idRstr = stringIDToTypeID("rasterizeLayer");
            var desc = new ActionDescriptor();
            var ref = new ActionReference();
            ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
            desc.putReference(charIDToTypeID("null"), ref);
            executeAction(idRstr, desc, DialogModes.NO);
        } catch (e) {
            try {
                if (layer.rasterize) layer.rasterize(RasterizeType.ENTIRELAYER);
                else ok = false;
            } catch (e2) {
                ok = false;
            }
        }

        // Restore locks
        try {
            if ("transparentPixelsLocked" in layer) layer.transparentPixelsLocked = relock.transparentPixels;
            if ("pixelsLocked" in layer) layer.pixelsLocked = relock.pixels;
            if ("positionLocked" in layer) layer.positionLocked = relock.position;
            layer.allLocked = relock.all;
        } catch (e) {}

        return ok;
    }

    function selectLayerById(id) {
        var ref = new ActionReference();
        ref.putIdentifier(charIDToTypeID("Lyr "), id);
        var desc = new ActionDescriptor();
        desc.putReference(charIDToTypeID("null"), ref);
        desc.putBoolean(charIDToTypeID("MkVs"), false);
        executeAction(charIDToTypeID("slct"), desc, DialogModes.NO);
    }

    function getActiveLayerSafe() {
        try { return app.activeDocument.activeLayer; } catch (e) { return null; }
    }
})();
