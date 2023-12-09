Blockly.Blocks['gauss'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gauss");
    this.appendValueInput("number_of_note")
        .setCheck("Number")
        .appendField("number of note");
    this.appendValueInput("ave_of_noteNo")
        .setCheck("Number")
        .appendField("ave of Note No.");
    this.appendValueInput("var")
        .setCheck("Number")
        .appendField("var");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("引数で指定した平均値と分散のガウス分布から指定した個数の音をランダムに取得する");
 this.setHelpUrl("");
  }
};