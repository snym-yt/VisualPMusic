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

function translateLet(code){
  var DefLetRegex = /([A-Za-z]\w*) = (\d+)/g;
  var DeleteDeclaration = /var .+;\n+/g;

  // マッチするすべてのforループを置換
  code = code.replace(DefLetRegex, 'let $1 = $2');
  code = code.replace(DeleteDeclaration, '');

  return code;
}

function translateLoop(code){
  var forLoopRegex = /for\s*\(\s*var\s+\w+\s*=\s*\d+\s*;\s*\w+\s*<\s*(\d+)\s*;\s*\w+\s*\+\+\s*\)\s*{/g;

  // マッチするすべてのforループを置換
  code = code.replace(forLoopRegex, 'loop($1){');

  return code;
}

function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);

  code = translateLoop(code);
  code = translateLet(code);

  document.getElementById('code').innerHTML = '<pre class="prettyprint lang-js" style="margin: 0px"><span style="font-size:1.1em">' + code + '</span></pre>';
  PR.prettyPrint();
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
  let markdown_text = $(selector).html();
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
      "CodeBlocks/Japanese/blocks/js/play_block2.js",
      "CodeBlocks/Japanese/generators/play2.js",
      // "CodeBlocks/Japanese/blocks/js/random_block.js",
      // "CodeBlocks/Japanese/generators/random.js",
      // "CodeBlocks/Japanese/blocks/js/custom_test_block.js",
      // "CodeBlocks/Japanese/generators/custom_test.js",
      "CodeBlocks/Japanese/blocks/js/gauss_block2.js",
      "CodeBlocks/Japanese/generators/gauss2.js",
      "CodeBlocks/Japanese/blocks/js/weibul_block2.js",
      "CodeBlocks/Japanese/generators/weibul2.js",
      "CodeBlocks/Japanese/blocks/js/randwalk_block.js",
      "CodeBlocks/Japanese/generators/randwalk.js"
    ],
    en: [
      "CodeBlocks/English/blocks/js/play_block2.js",
      "CodeBlocks/English/generators/play2.js",
      // "CodeBlocks/English/blocks/js/random_block.js",
      // "CodeBlocks/English/generators/random.js",
      // "CodeBlocks/English/blocks/js/custom_test_block.js",
      // "CodeBlocks/English/generators/custom_test.js",
      "CodeBlocks/English/blocks/js/gauss_block2.js",
      "CodeBlocks/English/generators/gauss2.js",
      "CodeBlocks/English/blocks/js/weibul_block2.js",
      "CodeBlocks/English/generators/weibul2.js",
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


