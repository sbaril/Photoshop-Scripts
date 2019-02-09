#target photoshop
//
// ExtractColorFromBG.jsx
//

//
// Generated Sat Feb 09 2019 18:56:05 GMT+0100
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Extract-Color-From-BG ==============
//
function Extract_Color_From_BG() {
  // Crer
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('SnpS'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('HstS'), cTID('CrnH'));
    desc1.putReference(cTID('From'), ref2);
    desc1.putString(cTID('Nm  '), "Extract");
    desc1.putEnumerated(cTID('Usng'), cTID('HstS'), cTID('Mrg2'));
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Slection
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('SnpS'), "Extract");
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Crer
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Dcmn'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('HstS'), cTID('CrnH'));
    desc1.putReference(cTID('Usng'), ref2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Crer
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('SnpS'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('HstS'), cTID('CrnH'));
    desc1.putReference(cTID('From'), ref2);
    desc1.putString(cTID('Nm  '), "Channels");
    desc1.putEnumerated(cTID('Usng'), cTID('HstS'), cTID('FllD'));
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Slection
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('SnpS'), "Channels");
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Crer
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Dcmn'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('HstS'), cTID('CrnH'));
    desc1.putReference(cTID('Usng'), ref2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Changer le mode
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putClass(cTID('T   '), sTID("CMYKColorMode"));
    executeAction(sTID('convertMode'), desc1, dialogMode);
  };

  // Dfinir
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Cyn '));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Intervertir
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('inverse'), undefined, dialogMode);
  };

  // Crer
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Cian");
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Bl  '));
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Cyn '), 84.17);
    desc4.putDouble(cTID('Mgnt'), 0);
    desc4.putDouble(cTID('Ylw '), 20.86);
    desc4.putDouble(cTID('Blck'), 0);
    desc3.putObject(cTID('Clr '), cTID('CMYC'), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Masquer
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(sTID('hide'), desc1, dialogMode);
  };

  // Slection
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Arrière-plan");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(1);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dfinir
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Mgnt'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Intervertir
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('inverse'), undefined, dialogMode);
  };

  // Crer
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Magenta");
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Rd  '));
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Cyn '), 23.69);
    desc4.putDouble(cTID('Mgnt'), 74.75);
    desc4.putDouble(cTID('Ylw '), 0);
    desc4.putDouble(cTID('Blck'), 0);
    desc3.putObject(cTID('Clr '), cTID('CMYC'), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Masquer
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(sTID('hide'), desc1, dialogMode);
  };

  // Slection
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Arrière-plan");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(1);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dfinir
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Yllw'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Intervertir
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('inverse'), undefined, dialogMode);
  };

  // Crer
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Yellow");
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Ylw '));
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Cyn '), 10.5);
    desc4.putDouble(cTID('Mgnt'), 0);
    desc4.putDouble(cTID('Ylw '), 100);
    desc4.putDouble(cTID('Blck'), 0);
    desc3.putObject(cTID('Clr '), cTID('CMYC'), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Masquer
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(sTID('hide'), desc1, dialogMode);
  };

  // Slection
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Arrière-plan");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(1);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dfinir
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Blck'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Intervertir
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('inverse'), undefined, dialogMode);
  };

  // Crer
  function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Black");
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Gry '));
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Cyn '), 91.17);
    desc4.putDouble(cTID('Mgnt'), 78.68);
    desc4.putDouble(cTID('Ylw '), 61.95);
    desc4.putDouble(cTID('Blck'), 97.45);
    desc3.putObject(cTID('Clr '), cTID('CMYC'), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Slection
  function step26(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Cian");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(8);
    list1.putInteger(7);
    list1.putInteger(6);
    list1.putInteger(5);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Inverser
  function step27(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('reverse'), desc1, dialogMode);
  };

  // Afficher
  function step28(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Yellow");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(sTID('show'), desc1, dialogMode);
  };

  // Afficher
  function step29(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Magenta");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(sTID('show'), desc1, dialogMode);
  };

  // Afficher
  function step30(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Cian");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(sTID('show'), desc1, dialogMode);
  };

  // Dfinir
  function step31(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Mltp'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Crer
  function step32(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("layerSection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('From'), ref2);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "No-White");
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    desc1.putObject(cTID('Usng'), sTID("layerSection"), desc2);
    desc1.putInteger(sTID("layerSectionStart"), 11);
    desc1.putInteger(sTID("layerSectionEnd"), 12);
    desc1.putString(cTID('Nm  '), "No-White");
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Dupliquer
  function step33(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putName(cTID('Dcmn'), "Extract");
    desc1.putReference(cTID('T   '), ref2);
    desc1.putString(cTID('Nm  '), "No-White");
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(4);
    list1.putInteger(5);
    list1.putInteger(6);
    list1.putInteger(7);
    list1.putInteger(8);
    list1.putInteger(9);
    desc1.putList(cTID('Idnt'), list1);
    executeAction(sTID('duplicate'), desc1, dialogMode);
  };

  // Fermer
  function step34(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Svng'), cTID('YsN '), cTID('N   '));
    desc1.putInteger(cTID('DocI'), 403);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(sTID('close'), desc1, dialogMode);
  };

  // Slection
  function step35(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Black");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(8);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dfinir
  function step36(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(sTID("contentLayer"), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putDouble(cTID('Rd  '), 0);
    desc3.putDouble(cTID('Grn '), 0);
    desc3.putDouble(cTID('Bl  '), 0);
    desc2.putObject(cTID('Clr '), sTID("RGBColor"), desc3);
    desc1.putObject(cTID('T   '), sTID("solidColorLayer"), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Slection
  function step37(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Yellow");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(7);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dfinir
  function step38(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(sTID("contentLayer"), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putDouble(cTID('Rd  '), 255);
    desc3.putDouble(cTID('Grn '), 255);
    desc3.putDouble(cTID('Bl  '), 0);
    desc2.putObject(cTID('Clr '), sTID("RGBColor"), desc3);
    desc1.putObject(cTID('T   '), sTID("solidColorLayer"), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Slection
  function step39(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Magenta");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(6);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dfinir
  function step40(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(sTID("contentLayer"), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putDouble(cTID('Rd  '), 255);
    desc3.putDouble(cTID('Grn '), 0);
    desc3.putDouble(cTID('Bl  '), 255);
    desc2.putObject(cTID('Clr '), sTID("RGBColor"), desc3);
    desc1.putObject(cTID('T   '), sTID("solidColorLayer"), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Slection
  function step41(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Cian");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(5);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dfinir
  function step42(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(sTID("contentLayer"), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putDouble(cTID('Rd  '), 0);
    desc3.putDouble(cTID('Grn '), 255);
    desc3.putDouble(cTID('Bl  '), 255);
    desc2.putObject(cTID('Clr '), sTID("RGBColor"), desc3);
    desc1.putObject(cTID('T   '), sTID("solidColorLayer"), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Slection
  function step43(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "No-White");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(9);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Dupliquer
  function step44(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Composite");
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(22);
    list1.putInteger(23);
    list1.putInteger(24);
    list1.putInteger(25);
    list1.putInteger(26);
    list1.putInteger(27);
    desc1.putList(cTID('Idnt'), list1);
    executeAction(sTID('duplicate'), desc1, dialogMode);
  };

  // Fusionner les calques
  function step45(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('mergeLayersNew'), undefined, dialogMode);
  };

  // Dfinir
  function step46(enabled, withDialog) {
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

  // Supprimer
  function step47(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var list1 = new ActionList();
    list1.putInteger(27);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('delete'), desc1, dialogMode);
  };

  // Crer
  function step48(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putClass(cTID('Nw  '), cTID('Chnl'));
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
    desc1.putReference(cTID('At  '), ref1);
    desc1.putEnumerated(cTID('Usng'), cTID('UsrM'), cTID('RvlS'));
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Dfinir
  function step49(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "No-White");
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putBoolean(cTID('UsrM'), false);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Dfinir
  function step50(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
    ref2.putName(cTID('Lyr '), "No-White");
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Crer
  function step51(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "White-Fill");
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 255);
    desc4.putDouble(cTID('Grn '), 255);
    desc4.putDouble(cTID('Bl  '), 255);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Dplacement
  function step52(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Prvs'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('move'), desc1, dialogMode);
  };

  // Dplacement
  function step53(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Prvs'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('move'), desc1, dialogMode);
  };

  // Dplacement
  function step54(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Prvs'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('move'), desc1, dialogMode);
  };

  // Dplacement
  function step55(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Prvs'));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(sTID('move'), desc1, dialogMode);
  };

  // Slection
  function step56(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Niveaux
  function step57(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc2.putReference(cTID('Chnl'), ref1);
    var list2 = new ActionList();
    list2.putInteger(10);
    list2.putInteger(245);
    desc2.putList(cTID('Inpt'), list2);
    list1.putObject(cTID('LvlA'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(sTID('levels'), desc1, dialogMode);
  };

  // Slection
  function step58(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "No-White");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(9);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Supprimer
  function step59(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('delete'), desc1, dialogMode);
  };

  // Dfinir
  function step60(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('Al  '));
    executeAction(sTID('set'), desc1, dialogMode);
  };

  // Crer
  function step61(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Path'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('csel'), sTID("selection"));
    desc1.putReference(cTID('From'), ref2);
    desc1.putUnitDouble(cTID('Tlrn'), cTID('#Pxl'), 2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Slection
  function step62(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Back'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(1);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Crer
  function step63(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Cache");
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Gry '));
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 72.0000033080578);
    desc4.putDouble(cTID('Grn '), 24.8482498526573);
    desc4.putDouble(cTID('Bl  '), 24.8482498526573);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

  // Masquer
  function step64(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(sTID('hide'), desc1, dialogMode);
  };

  // Slection
  function step65(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "White-Fill");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Slection
  function step66(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('Dcmn'), -1);
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('DocI'), 223);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Supprimer
  function step67(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('SnpS'), "Extract");
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('delete'), desc1, dialogMode);
  };

  // Slection
  function step68(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('Dcmn'), 1);
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('DocI'), 594);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Supprimer
  function step69(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('SnpS'), "Channels");
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('delete'), desc1, dialogMode);
  };

  // Slection
  function step70(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "No-White");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(9);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Slection
  function step71(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Cache");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(17);
    list1.putInteger(16);
    list1.putInteger(5);
    list1.putInteger(6);
    list1.putInteger(7);
    list1.putInteger(8);
    list1.putInteger(9);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Slection
  function step72(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Frnt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(35);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Slection
  function step73(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Cache");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(56);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Afficher
  function step74(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(sTID('show'), desc1, dialogMode);
  };

  // Slection
  function step75(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "No-White");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(56);
    list1.putInteger(55);
    list1.putInteger(44);
    list1.putInteger(45);
    list1.putInteger(46);
    list1.putInteger(47);
    list1.putInteger(48);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  // Copier
  function step76(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyEvent'), undefined, dialogMode);
  };

  // Fermer
  function step77(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Svng'), cTID('YsN '), cTID('N   '));
    desc1.putInteger(cTID('DocI'), 737);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(sTID('close'), desc1, dialogMode);
  };

  // Coller
  function step78(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('paste'), undefined, dialogMode);
  };

  // Masquer
  function step79(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Cache");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(sTID('hide'), desc1, dialogMode);
  };

  // Slection
  function step80(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
    ref1.putName(cTID('Lyr '), "White-Fill");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(sTID('select'), desc1, dialogMode);
  };

  step1();      // Crer
  step2();      // Slection
  step3();      // Crer
  step4();      // Crer
  step5();      // Slection
  step6();      // Crer
  step7();      // Changer le mode
  step8();      // Dfinir
  step9();      // Intervertir
  step10();      // Crer
  step11();      // Masquer
  step12();      // Slection
  step13();      // Dfinir
  step14();      // Intervertir
  step15();      // Crer
  step16();      // Masquer
  step17();      // Slection
  step18();      // Dfinir
  step19();      // Intervertir
  step20();      // Crer
  step21();      // Masquer
  step22();      // Slection
  step23();      // Dfinir
  step24();      // Intervertir
  step25();      // Crer
  step26();      // Slection
  step27();      // Inverser
  step28();      // Afficher
  step29();      // Afficher
  step30();      // Afficher
  step31();      // Dfinir
  step32();      // Crer
  step33();      // Dupliquer
  step34();      // Fermer
  step35();      // Slection
  step36();      // Dfinir
  step37();      // Slection
  step38();      // Dfinir
  step39();      // Slection
  step40();      // Dfinir
  step41();      // Slection
  step42();      // Dfinir
  step43();      // Slection
  step44();      // Dupliquer
  step45();      // Fusionner les calques
  step46();      // Dfinir
  step47();      // Supprimer
  step48();      // Crer
  step49();      // Dfinir
  step50();      // Dfinir
  step51();      // Crer
  step52();      // Dplacement
  step53();      // Dplacement
  step54();      // Dplacement
  step55();      // Dplacement
  step56();      // Slection
  step57();      // Niveaux
  step58();      // Slection
  step59();      // Supprimer
  step60();      // Dfinir
  step61();      // Crer
  step62();      // Slection
  step63();      // Crer
  step64();      // Masquer
  step65();      // Slection
  step66();      // Slection
  step67();      // Supprimer
  step68();      // Slection
  step69();      // Supprimer
  step70();      // Slection
  step71();      // Slection
  step72();      // Slection
  step73();      // Slection
  step74();      // Afficher
  step75();      // Slection
  step76();      // Copier
  step77();      // Fermer
  step78();      // Coller
  step79();      // Masquer
  step80();      // Slection
};



//=========================================
//                    Extract_Color_From_BG.main
//=========================================
//

Extract_Color_From_BG.main = function () {
  Extract_Color_From_BG();
};

//Extract_Color_From_BG.main();
app.activeDocument.suspendHistory("Extract Color from Background", 'Extract_Color_From_BG.main()');

// EOF

"ExtractColorFromBG.jsx"
// EOF
