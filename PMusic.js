Blockly.defineBlocksWithJsonArray(
    [{
        "type": "play",
        "message0": "play %1 Note No. %2 during %3",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "Note No.",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "during",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "ノートナンバーの音をduringの間流す",
        "helpUrl": ""
      }]
  );

  javascript.javascriptGenerator.forBlock['play'] = function(block, generator) {
    var value_note_no_ = generator.valueToCode(block, 'Note No.', javascript.Order.ATOMIC);
    var value_during = generator.valueToCode(block, 'during', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = 'play(' + value_note_no_ + ', ' + value_during + ');';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.javascript.ORDER_NONE];
  };