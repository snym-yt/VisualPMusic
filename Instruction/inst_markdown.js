 // 読み込み時に、マークダウンをHTMLに変換して表示
 window.addEventListener('load', function () {

    //`と`の間に、表示したいマークダウンを左詰めで記述する。
    var text = `
## 基本的な使い方
[説明スライド](https://docs.google.com/presentation/d/e/2PACX-1vT1mbMEAce7wPtNiAS6GiqaizWgwW2jgFR0ZFaZSC2VrczMZ1R3cTQyUSI6W9nwaBuXxxajNl4Gl-xy/pub?start=false&loop=false&delayms=3000) (このタブでスライドが開かれます)

## MIDIノートナンバー

PMusicでは鍵盤(音の高さ)を数字で表す[MIDIノートナンバー](https://www.asahi-net.or.jp/~hb9t-ktd/music/Japan/Research/DTM/freq_map.html)を使用している．
0以上の整数で指定する．(負の値を入力すると自動で0になるように設定されている)

## Common
##### (1) 数値
数字で値を入れることが出来る．
小数，負の数も入れられるが，このブロック一つだけで「2/3」のような分数の形を表現することは出来ない．
<img src="Instruction/figures/numvalue.png" width="5%">
<img src="Instruction/figures/numvalue_example.png" width="25%">

##### (2) 条件分岐(if文)
上の凹みに条件文を，下の凹みに条件が真(True)のときに行ってほしい命令を置く．
歯車の部分をクリックすると「else if」，「else」を選択することが出来る．
<img src="Instruction/figures/if_block.png" width="10%"> <img src="Instruction/figures/if_example.png" width="30%">

##### (3) [不]等号/不等式
6種類の比較がある．
プログラミング経験のある人は，ここでの「＝」は「＝＝」であって代入ではないことに注意．
<img src="Instruction/figures/equal_inequal_block.png" width="10%">
<img src="Instruction/figures/all_equal_inequal.png" width="60%">

##### (4) 演算(計算)
5種類の演算(計算)がある．空いている部分に演算を入れたり，数値ブロックを入れたり出来る．
<img src="Instruction/figures/Calculation_block.png" width="10%">
<img src="Instruction/figures/all_calculation.png" width="55%">
<img src="Instruction/figures/calculation_example.png" width="30%">

##### (3) 数値

loop文は本文を書くところに変数束縛を使用するとエラーが発生して終了してしまっていることに注意．

また．本リポジトリでビジュアルプログラミング化する際にBlocklyに元から組み込まれているものを流用するため，"loop"は"repeat"として表されている．

##### (4)条件分岐


##### (5)配列

配列の要素は型が一致していなくてもよい．


[Blocklyの配列のWiki](https://github.com/google/blockly/wiki/Lists)
「create empty list」，「create list with」，「length of」のみ実装．



### 組み込み関数(確率音楽)：確率音楽関数

##### (1)gauss

引数にとったパラメータから[ガウス分布](https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83)を作成し，そのガウス分布からランダムに音を生成する．


##### (2)weibul

引数に取ったパラメータから[ワイブル分布](https://poncotty.com/2020/03/28/%E3%83%AF%E3%82%A4%E3%83%96%E3%83%AB%E5%88%86%E5%B8%83/)を作成し，そのワイブル分布からランダムに音を生成する．他の確率音楽関数と違って，一度に生成できる音の数は１のみ．引数が4つは多いと判断したため．



位置パラメータの値を1~5に制限しているのは，weibul関数の知識がない人が位置パラメータの値を大きく取り過ぎてノートナンバーが以上に高くなるのを防ぐため．

##### (3)randwalk

ガウス分布から音高の変化値を抽出し，現在の音高に加えていく．



### 組み込み関数(音生成)

##### (1)play


### 組み込み関数(その他)

##### (1)len

文字列の長さや配列の大きさを返す．



##### (2)first

配列の先頭の要素を取得する．



##### (3)last

配列の最後尾の要素を取得する．



##### (4)rest

与えられた配列の最初の要素を取り除いた配列を返す．
返しているのは新しく作成した残り要素の配列なので，引数に渡された配列自体は変化していない．





`;
    var html = marked(text);
    document.getElementById('markdown_preview').innerHTML = html;
  })