javascript.javascriptGenerator.forBlock['play'] = function(block, generator) {
  var value_note_no_ = generator.valueToCode(block, 'Note No.', javascript.Order.ATOMIC);
  var value_during = generator.valueToCode(block, 'during', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'play(' + value_note_no_ + ', ' + value_during + ');\n';
  return code;
};