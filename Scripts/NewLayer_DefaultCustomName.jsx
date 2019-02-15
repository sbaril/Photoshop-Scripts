#target photoshop
//
// NewLayer_DefaultCustomName.jsx
//

//
// Generated Fri Feb 15 2019 11:25:48 GMT+0100
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== NewLayer-DefaultCustomName ==============
//
function NewLayer_DefaultCustomName() {
  // Create
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Layer");
    desc1.putObject(cTID('Usng'), cTID('Lyr '), desc2);
    desc1.putInteger(cTID('LyrI'), 201);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  step1();      // Create
};



//=========================================
//                    NewLayer_DefaultCustomName.main
//=========================================
//

NewLayer_DefaultCustomName.main = function () {
  NewLayer_DefaultCustomName();
};

// NewLayer_DefaultCustomName.main();
app.activeDocument.suspendHistory("New Layer with Custom Default Name", 'NewLayer_DefaultCustomName.main()');


// EOF

"NewLayer_DefaultCustomName.jsx"
// EOF
