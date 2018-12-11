#target photoshop
//
// NewLayerBelowName.jsx
//

//
// Generated Tue Mar 25 2014 15:52:59 GMT+0100
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== NewLayerBelowName ==============
//
function NewLayerBelowName() {
  // Crer
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(sTID("below"), true);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  step1(true, true);      // Crer
};



//=========================================
//                    NewLayerBelowName.main
//=========================================
//

NewLayerBelowName.main = function () {
  NewLayerBelowName();
};

//NewLayerBelowName.main();
app.activeDocument.suspendHistory("Create a new Layer below the selected one with renaming", 'NewLayerBelowName.main()');

// EOF

"NewLayerBelowName.jsx"
// EOF
