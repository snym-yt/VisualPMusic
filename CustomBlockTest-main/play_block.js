Blockly.Blocks['play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play");
    this.appendValueInput("Note No.")
        .setCheck("Number")
        .appendField("Note No.");
    this.appendValueInput("during")
        .setCheck("Number")
        .appendField("during");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("ノートナンバーの音をduringの間流す");
 this.setHelpUrl("");
  }
};
