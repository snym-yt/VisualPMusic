Blockly.Blocks['play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play")
        .appendField("Note No.")
        .appendField(new Blockly.FieldNumber(0, 0), "Note No.")
        .appendField("during")
        .appendField(new Blockly.FieldNumber(0, 0), "during");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("ノートナンバーの音をduringの間流す");
 this.setHelpUrl("");
  }
};