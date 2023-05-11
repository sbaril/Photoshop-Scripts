#target photoshop
//
// ExtractObjectAndCleanBGCAFspace.jsx
//

//
// Generated Thu May 11 2023 11:15:00 GMT+0200
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Extract-Clean-CAF-Space ==============
//
function Extract_Clean_CAF_Space() {
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

  // Remplissage d'aprs le contenu
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("cafSamplingRegion"), sTID("cafSamplingRegion"), sTID("cafSamplingRegionAuto"));
    desc1.putBoolean(sTID("cafSampleAllLayers"), false);
    desc1.putEnumerated(sTID("cafColorAdaptationLevel"), sTID("cafColorAdaptationLevel"), sTID("cafColorAdaptationDefault"));
    desc1.putEnumerated(sTID("cafRotationAmount"), sTID("cafRotationAmount"), sTID("cafRotationAmountNone"));
    desc1.putBoolean(sTID("cafScale"), false);
    desc1.putBoolean(sTID("cafMirror"), false);
    desc1.putEnumerated(sTID("cafOutput"), sTID("cafOutput"), sTID("cafOutputToCurrentLayer"));
    executeAction(sTID('cafWorkspace'), desc1, dialogMode);
  };

  // Remplir
  function step6(enabled, withDialog) {
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
  function step7(enabled, withDialog) {
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
  function step8(enabled, withDialog) {
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
  step5(true, true);      // Remplissage d'aprs le contenu
  step6(false, false);      // Remplir
  step7();      // Dfinir
  step8();      // Slection
};



//=========================================
//                    Extract_Clean_CAF_Space.main
//=========================================
//

Extract_Clean_CAF_Space.main = function () {
  Extract_Clean_CAF_Space();
};

Extract_Clean_CAF_Space.main();

// EOF

app.activeDocument.suspendHistory("Extract Object from BG with CAF Space", 'ExtractObjectAndCleanBGCAFspace.main()');
//"ExtractObjectAndCleanBGCAFspace.jsx"
// EOF
