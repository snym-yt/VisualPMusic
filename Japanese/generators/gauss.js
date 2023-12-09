Blockly.JavaScript['gauss'] = function(block, generator) {
  var value_number_of_note = generator.valueToCode(block, 'number_of_note', javascript.Order.ATOMIC);
  var value_ave_of_noteno = generator.valueToCode(block, 'ave_of_noteNo', javascript.Order.ATOMIC);
  var value_var = generator.valueToCode(block, 'var', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = value_number_of_note + value_ave_of_noteno + value_var + '\n';
  return code;
};