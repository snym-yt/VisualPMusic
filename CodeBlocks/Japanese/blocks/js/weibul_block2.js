Blockly.Blocks['weibul'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("weibul")
        .appendField("分布の形 (小数)")
        .appendField(new Blockly.FieldNumber(2.5, 0), "shape")
        .appendField("ピークの位置 (自然数)")
        .appendField(new Blockly.FieldNumber(60, 0, Infinity, 1), "scale");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("get note from weibul distributiom which is made of arguments");
 this.setHelpUrl("");
  }
};