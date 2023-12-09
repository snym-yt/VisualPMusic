Blockly.Blocks['play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play")
        .appendField("Note No.(int)")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "Note No.")
        .appendField("during(double)")
        .appendField(new Blockly.FieldNumber(0, 0), "during");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("ノートナンバーの音をduringの間流す");
 this.setHelpUrl("");
  }
};