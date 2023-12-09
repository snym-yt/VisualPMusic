Blockly.Blocks['gauss'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gauss")
        .appendField("number_of_note")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "num_of_note")
        .appendField("ave_of_noteNo")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "ave_of_noteNo")
        .appendField("var")
        .appendField(new Blockly.FieldNumber(0, 0), "var");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("引数で指定した平均値と分散のガウス分布から指定した個数の音をランダムに取得する");
 this.setHelpUrl("");
  }
};