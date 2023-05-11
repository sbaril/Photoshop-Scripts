#target photoshop
//
// ExtractObjectAndCleanBG.jsx
//

//
// Generated Thu May 11 2023 11:14:03 GMT+0200
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Extract-Clean ==============
//
function Extract_Clean() {
  // Crer
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Extract");
    desc1.putObject(cTID('Nw  '), cTID('Lyr '), desc2);
    desc1.putEnumerated(cTID('Usng'), cTID('ArSl'), cTID('Slct'));
    desc1.putBoolean(cTID('Cpy '), true);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Dfinir
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Trsp'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Slection
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Bckw'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(4);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dilater
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('By  '), cTID('#Pxl'), 10);
    desc1.putBoolean(sTID("selectionModifyEffectAtCanvasBounds"), false);
    executeAction(sTID('expand'), desc1, dialogMode);
  };

  // Remplir
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), sTID("contentAware"));
    desc1.putBoolean(sTID("contentAwareColorAdaptationFill"), true);
    desc1.putBoolean(sTID("contentAwareRotateFill"), false);
    desc1.putBoolean(sTID("contentAwareScaleFill"), false);
    desc1.putBoolean(sTID("contentAwareMirrorFill"), false);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(sTID('fill'), desc1, dialogMode);
  };

  // Dfinir
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Slection
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Frwr'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(3);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  step1();      // Crer
  step2();      // Dfinir
  step3();      // Slection
  step4();      // Dilater
  step5();      // Remplir
  step6();      // Dfinir
  step7();      // Slection
};



//=========================================
//                    Extract_Clean.main
//=========================================
//

Extract_Clean.main = function () {
  Extract_Clean();
};

Extract_Clean.main();

// EOF

app.activeDocument.suspendHistory("Extract Object from BG", 'ExtractObjectAndCleanBG.main()');
//"ExtractObjectAndCleanBG.jsx"
// EOF
