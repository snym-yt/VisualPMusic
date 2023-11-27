var KEY = 'BlocklyStorage';

var workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  trashcan: true
});

window.setTimeout(function () {
  if ('localStorage' in window && window.localStorage[KEY]) {
    restoreBlocks();
  } else {
    Blockly.Xml.domToWorkspace(document.querySelector('#startBlocks'), workspace);
  }
}, 0);

function translateLoop(code){
  var forLoopRegex = /for\s*\(\s*var\s+\w+\s*=\s*\d+\s*;\s*\w+\s*<\s*(\d+)\s*;\s*\w+\s*\+\+\s*\)\s*{/g;

  // マッチするすべてのforループを置換
  code = code.replace(forLoopRegex, 'loop($1){');

  return code;
}

function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);

  code = translateLoop(code);

  document.getElementById('code').innerHTML = '<pre class="prettyprint lang-js" style="margin: 0px"><span style="font-size:1.1em">' + code + '</span></pre>';
  PR.prettyPrint();
  backupBlocks();
}
workspace.addChangeListener(myUpdateFunction);


function backupBlocks() {
  if (!'localStorage' in window) return;
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var text = Blockly.Xml.domToText(xml);
  //console.log(text);
  window.localStorage.setItem(KEY, text);
}

function restoreBlocks() {
  var xml = Blockly.Xml.textToDom(window.localStorage[KEY]);
    Blockly.Xml.domToWorkspace(xml, workspace);
}

function runCode() {
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert('Bad code: ' + e);
  }
}