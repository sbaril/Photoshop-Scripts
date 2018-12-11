#target photoshop
//
// ExtractDrawingBgColor.jsx
//

//
// Generated Fri Mar 28 2014 07:45:13 GMT+0100
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== ExtractDrawingBgColor ==============
//
function ExtractDrawingBgColor() {
  // Slection
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('select'), desc1, dialogMode);
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
    ref2.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
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
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dfinir
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Intervertir
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('inverse'), undefined, dialogMode);
  };

  // Crer
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Drawing");
    desc1.putObject(cTID('Usng'), cTID('Lyr '), desc2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Dfinir
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Gry '));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Rinitialiser
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Clr '), cTID('Clrs'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('reset'), desc1, dialogMode);
  };

  // Remplir
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('FrgC'));
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(sTID('fill'), desc1, dialogMode);
  };

  // Dfinir
  function step10(enabled, withDialog) {
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
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Bckw'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Remplir
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('BckC'));
    executeAction(sTID('fill'), desc1, dialogMode);
  };

  // Crer
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Color");
    desc1.putObject(cTID('Usng'), cTID('Lyr '), desc2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Dfinir
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Orng'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Slection
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Frwr'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  step1();      // Slection
  step2();      // Dfinir
  step3();      // Slection
  step4(false, false);      // Dfinir
  step5();      // Intervertir
  step6();      // Crer
  step7();      // Dfinir
  step8();      // Rinitialiser
  step9();      // Remplir
  step10();      // Dfinir
  step11();      // Slection
  step12();      // Remplir
  step13();      // Crer
  step14();      // Dfinir
  step15(false, false);      // Slection
};



//=========================================
//                    ExtractDrawingBgColor.main
//=========================================
//

ExtractDrawingBgColor.main = function () {
  ExtractDrawingBgColor();
};

//ExtractDrawingBgColor.main();
app.activeDocument.suspendHistory("Extract Grayscale Lines from the Background + an Empty Layer for Color", 'ExtractDrawingBgColor.main()');

// EOF

"ExtractDrawingBgColor.jsx"
// EOF
