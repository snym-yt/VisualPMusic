var KEY = 'BlocklyStorage';

var workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  trashcan: true
});

window.setTimeout(function () {
  if ('localStorage' in window && window.localStorage[KEY]) {
    restoreBlocks();
  } else {
    // Blockly.Xml.domToWorkspace(document.querySelector('#startBlocks'), workspace);
    var startBlocksText = document.getElementById('startBlocks').outerHTML;
    var xml = Blockly.Xml.textToDom(startBlocksText);
    Blockly.Xml.domToWorkspace(xml, workspace);
    myUpdateFunction();
  }
}, 0);

function translateLet(code){
  var DefLetRegex = /([A-Za-z]\w*) = (\d+)/g;
  var DeleteDeclaration = /var .+;\n+/g;
  var DefChange = /([A-Za-z]\w*) = \(typeof .+ : \d+\) \+ (\d+);/g
  // マッチするすべてのforループを置換
  code = code.replace(DefLetRegex, 'let $1 = $2');
  code = code.replace(DeleteDeclaration, '');
  code = code.replace(DefChange, 'let $1 = $1 + $2;')
  return code;
}

function translateLoop(code){
  var forLoopRegex = /for\s*\(\s*var\s+\w+\s*=\s*\d+\s*;\s*\w+\s*<\s*(\d+)\s*;\s*\w+\s*\+\+\s*\)\s*{/g;
  // マッチするすべてのforループを置換
  code = code.replace(forLoopRegex, 'loop($1){');
  return code;
}

function translatePlay(code){
  var playRegex = /play\((\d+)\.*(\d*), (\d+)\)/g;
  code = code.replace(playRegex, 'play($1, $3.0)');
  return code;
}

function translateGauss(code){
  var gaussRegex = /gauss\((\d+)\.*(\d*), (\d+)\.*(\d*), (.*)\)/g;
  var varRegex = /gauss\((.*), (.*), (\d+)\)/g;
  code = code.replace(gaussRegex, 'gauss($1, $3, $5)');
  code = code.replace(varRegex, 'gauss($1, $2, $3.0)');
  return code;
}

function translateWeibul(code){
  var shapeRegex = /weibul\((\d+), (.*)\)/g;
  var scaleRegex = /weibul\((.*), (\d+)\.(\d*)\)/g;
  code = code.replace(shapeRegex, 'weibul($1.0, $2)');
  code = code.replace(scaleRegex, 'weibul($1, $2)');
  return code;
}

function translateRandwalk(code){
  var randwalkRegex = /randwalk\((\d*)(\.*\d*), (\d*)(\.*\d*)\)/g;
  code = code.replace(randwalkRegex, 'randwalk($1, $3)');
  return code;
}

function codeTranslate(code){
  code = translateLoop(code);
  code = translateLet(code);
  code = translatePlay(code);
  code = translateGauss(code);
  code = translateWeibul(code);
  code = translateRandwalk(code);
  return code;
}

function myUpdateFunction(event) {
  // if (typeof PR === 'undefined') {
  //   // Google Code Prettifyが未定義の場合、ライブラリを読み込む
  //   var prettifyScript = document.createElement('script');
  //   prettifyScript.src = 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js';
  //   document.head.appendChild(prettifyScript);
  // }  
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  code = codeTranslate(code);

  document.getElementById('code').innerHTML = '<pre class="prettyprint lang-js" style="margin: 0px"><span style="font-size:1.1em">' + code + '</span></pre>';
  // PR.prettyPrint();
  backupBlocks();
}
workspace.addChangeListener(myUpdateFunction);



function backupBlocks() {
  if (!'localStorage' in window) return;
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var text = Blockly.Xml.domToText(xml);
  window.localStorage.setItem(KEY, text);
}

function restoreBlocks() {
  var xml = Blockly.Xml.textToDom(window.localStorage[KEY]);
    Blockly.Xml.domToWorkspace(xml, workspace);
}

function playMusic(){

}

function runCode() {
  // 無限ループのコードがあっても1000で強制ストップ
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

function copyCode() {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  code = codeTranslate(code);
  try {
    var textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
  } catch (e) {
    alert('Bad code: ' + e);
  }
}


// マークダウンの基本設定
const markdown_setting = window.markdownit({
  html: true, // htmlタグを有効にする
  breaks: true, // md内の改行を<br>に変換
});

const markdown_editer = $(".js-markdown-editer");

// マークダウンの設定をjs-markdown-editerにHTMLとして反映させる
const markdown_html = markdown_setting.render(getHtml(markdown_editer));
markdown_editer.html(markdown_html);
  
// 比較演算子（=，<>，<，<=，>，>=）をそのまま置換する
function getHtml(selector) {
  // $(selector)で取得した要素が存在しない場合、空の文字列を返す
  let markdown_text = $(selector).html() || '';
  // let markdown_text = document.querySelectorAll(selector)[1].innerHTML;
  markdown_text = markdown_text.replace(/&lt;/g, "<");
  markdown_text = markdown_text.replace(/&gt;/g, ">");
  markdown_text = markdown_text.replace(/&amp;/g, "&");

  return markdown_text;
}

function closePopup() {
  console.log('Closing popup');
  // body.classList.remove('open_popup');
  const body = document.querySelector('body');
  if (body) {
    body.classList.remove('open_popup');
  }
}

function setLanguage(lang) {
  // 言語別のスクリプトのリストを定義
  const scripts = {
    ja: [
      "CodeBlocks/Japanese/blocks/js/play_block.js",
      "CodeBlocks/Japanese/generators/play.js",
      "CodeBlocks/Japanese/blocks/js/play_block2.js",
      "CodeBlocks/Japanese/generators/play2.js",
      "CodeBlocks/Japanese/blocks/js/gauss_block.js",
      "CodeBlocks/Japanese/generators/gauss.js",
      "CodeBlocks/Japanese/blocks/js/gauss_block2.js",
      "CodeBlocks/Japanese/generators/gauss2.js",
      "CodeBlocks/Japanese/blocks/js/weibul_block.js",
      "CodeBlocks/Japanese/generators/weibul.js",
      "CodeBlocks/Japanese/blocks/js/weibul_block2.js",
      "CodeBlocks/Japanese/generators/weibul2.js",
      "CodeBlocks/Japanese/blocks/js/randwalk_block1.js",
      "CodeBlocks/Japanese/generators/randwalk1.js",
      "CodeBlocks/Japanese/blocks/js/randwalk_block.js",
      "CodeBlocks/Japanese/generators/randwalk.js"
    ],
    en: [
      "CodeBlocks/English/blocks/js/play_block.js",
      "CodeBlocks/English/generators/play.js",
      "CodeBlocks/English/blocks/js/play_block2.js",
      "CodeBlocks/English/generators/play2.js",
      "CodeBlocks/English/blocks/js/gauss_block.js",
      "CodeBlocks/English/generators/gauss.js",
      "CodeBlocks/English/blocks/js/gauss_block2.js",
      "CodeBlocks/English/generators/gauss2.js",
      "CodeBlocks/English/blocks/js/weibul_block.js",
      "CodeBlocks/English/generators/weibul.js",
      "CodeBlocks/English/blocks/js/weibul_block2.js",
      "CodeBlocks/English/generators/weibul2.js",
      "CodeBlocks/English/blocks/js/randwalk_block1.js",
      "CodeBlocks/English/generators/randwalk1.js",
      "CodeBlocks/English/blocks/js/randwalk_block.js",
      "CodeBlocks/English/generators/randwalk.js"
    ]
  };

  // すでに読み込まれているスクリプトを一旦削除
  const existingScripts = document.querySelectorAll('script');
  existingScripts.forEach(script => script.remove());

  // 言語別にスクリプトを読み込む
  const scriptList = scripts[lang];
  if (scriptList) {
    scriptList.forEach(script => {
      const scriptElement = document.createElement('script');
      scriptElement.src = script;
      document.body.appendChild(scriptElement);
    });
  }
}


