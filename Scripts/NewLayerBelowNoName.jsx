#target photoshop
//
// NewLayerBelowNoName.jsx
//

//
// Generated Tue Mar 25 2014 15:59:09 GMT+0100
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== NewLayerBelowNoName ==============
//
function NewLayerBelowNoName() {
  // Creer
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

  step1();      // Crer
};



//=========================================
//                    NewLayerBelowNoName.main
//=========================================
//

NewLayerBelowNoName.main = function () {
  NewLayerBelowNoName();
};

//NewLayerBelowNoName.main();
app.activeDocument.suspendHistory("Create a new Layer below the selected one without renaming", 'NewLayerBelowNoName.main()');

// EOF

"NewLayerBelowNoName.jsx"
// EOF
