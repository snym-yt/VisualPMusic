Blockly.JavaScript['random'] = function(block, generator) {
  var value_min = generator.valueToCode(block, 'min', javascript.Order.ATOMIC);
  var value_max = generator.valueToCode(block, 'max', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'Math.floor( Math.random() * (' + value_max + ' - ' + value_min + ' + 1 )) + ' +  value_min;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.javascript.ORDER_NONE];
};