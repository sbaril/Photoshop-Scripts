#target photoshop//// Colorisation_SplitProof.jsx////// Generated Thu Feb 19 2015 14:38:40 GMT+0100//cTID = function(s) { return app.charIDToTypeID(s); };sTID = function(s) { return app.stringIDToTypeID(s); };////==================== Colorisation_SplitProof ==============//function Colorisation_SplitProof() {  // Format d'preuve  function step1(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    desc1.putString(sTID("profile"), "Gray Gamma 1.8");    desc1.putEnumerated(cTID('Inte'), cTID('Inte'), cTID('Img '));    desc1.putBoolean(cTID('MpBl'), true);    executeAction(sTID('proofSetup'), desc1, dialogMode);  };  // Slection  function step2(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    var ref1 = new ActionReference();    ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('ZmOt'));    desc1.putReference(cTID('null'), ref1);    executeAction(sTID('select'), desc1, dialogMode);  };  // Slection  function step3(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    var ref1 = new ActionReference();    ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('NwVw'));    desc1.putReference(cTID('null'), ref1);    executeAction(sTID('select'), desc1, dialogMode);  };  // Format d'preuve  function step4(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    desc1.putEnumerated(cTID('Bltn'), sTID("builtinProof"), sTID("proofCMYK"));    executeAction(sTID('proofSetup'), desc1, dialogMode);  };  // Slection  function step5(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    var ref1 = new ActionReference();    ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('NwVw'));    desc1.putReference(cTID('null'), ref1);    executeAction(sTID('select'), desc1, dialogMode);  };  // Slection  function step6(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    var ref1 = new ActionReference();    ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('FtOn'));    desc1.putReference(cTID('null'), ref1);    executeAction(sTID('select'), desc1, dialogMode);  };  // Format d'preuve  function step7(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    desc1.putEnumerated(cTID('Bltn'), sTID("builtinProof"), sTID("proofCMYK"));    executeAction(sTID('proofSetup'), desc1, dialogMode);  };  // Slection  function step8(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    var ref1 = new ActionReference();    ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), sTID("toggleProofColors"));    desc1.putReference(cTID('null'), ref1);    executeAction(sTID('select'), desc1, dialogMode);  };  // Slection  function step9(enabled, withDialog) {    if (enabled != undefined && !enabled)      return;    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);    var desc1 = new ActionDescriptor();    var ref1 = new ActionReference();    ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), sTID("3upStacked"));    desc1.putReference(cTID('null'), ref1);    executeAction(sTID('select'), desc1, dialogMode);  };  step1();      // Format d'preuve  step2();      // Slection  step3();      // Slection  step4();      // Format d'preuve  step5();      // Slection  step6();      // Slection  step7();      // Format d'preuve  step8();      // Slection  step9();      // Slection};//=========================================//                    Colorisation_SplitProof.main//=========================================//Colorisation_SplitProof.main = function () {  Colorisation_SplitProof();};Colorisation_SplitProof.main();// EOF"Colorisation_SplitProof.jsx"// EOF