 // 読み込み時に、マークダウンをHTMLに変換して表示
 window.addEventListener('load', function () {

    //`と`の間に、表示したいマークダウンを左詰めで記述する。
    var text = `
## 目次
[1] 基本的な使い方
[2] General
  (1) 数値
  (2) 条件分岐(if文)
  (3) [不]等号/不等式
  (4) 演算(計算)
[3]Music
  (1) play
  (2) gauss
  (3) weibul
  (4) randwalk
[4]Loops
  (1) repaet ?? times
  (2) repeat while (until)
[5]Variables
  (1) 変数の作り方
  (2) set
  (3) change
  (4) variable

## 基本的な使い方
[説明スライド](https://docs.google.com/presentation/d/e/2PACX-1vT1mbMEAce7wPtNiAS6GiqaizWgwW2jgFR0ZFaZSC2VrczMZ1R3cTQyUSI6W9nwaBuXxxajNl4Gl-xy/pub?start=false&loop=false&delayms=3000) (このタブでスライドが開かれます)

## General
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

## Music
##### (1) play
ノートナンバーが鍵盤の位置(音の高さ)を表し，指定した音の長さ(秒)だけノートナンバーの音が鳴る．
ノートナンバーの入力は，小数で入れても．自動で少数第一位で四捨五入される．
(数値ブロックをはめるタイプでは小数点以下切り捨て)
音の長さの入力は，整数で入れていても自動で「.0」がコードエリアで付け足されるため実行には問題ない．
<img src="Instruction/figures/play_block.png" width="55%">
<img src="Instruction/figures/play_block2.png" width="55%">
<img src="Instruction/figures/play_example.png" width="55%">

##### (2) gauss
引数にとったパラメータから[ガウス分布](https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83)を作成し，そのガウス分布からランダムに音を生成する．
<img src="Instruction/figures/gauss_block.png" width="55%">
<img src="Instruction/figures/gauss_graph.png" width="65%">


##### (3) weibul
引数に取ったパラメータから[ワイブル分布](https://poncotty.com/2020/03/28/%E3%83%AF%E3%82%A4%E3%83%96%E3%83%AB%E5%88%86%E5%B8%83/)を作成し，そのワイブル分布からランダムに音を生成する．
他の確率音楽関数と違って，一度に生成できる音の数は１のみ．
<img src="Instruction/figures/weibul_block.png" width="55%">
<img src="Instruction/figures/weibul_graph.png" width="65%">

##### (4) randwalk
ガウス分布から音高の変化値を抽出し，現在の音高に加えていく．
この時に用いるガウス分布はこちらがすでに設定している．
<img src="Instruction/figures/randwalk_block.png" width="55%">
<img src="Instruction/figures/randomwalk.png" width="55%">

## Loops
##### (1) repeat ?? times
加えているブロックたちを，数字ブロックに書いた数字の分だけ繰り返す．(repeat 10 times -> 10回繰り返す)
repeat の中に更にrepeat を入れることもできる．
<img src="Instruction/figures/loop_block1.png" width="20%">
<img src="Instruction/figures/loop1_example.png" width="55%">
[play -> gauss -> {weibul -> weibul}] ->  [play -> gauss -> {weibul -> weibul}] ->  [play -> gauss -> {weibul -> weibul}]
のように命令が実行される．

##### (2) repeat while (until)
whileのとき，つけた条件が真となっている間，加えているブロックの命令が実行される．
untilのとき，つけた条件が偽となっている間，加えているブロックの命令が実行される．
<img src="Instruction/figures/loop_block2.png" width="20%">
<img src="Instruction/figures/loop2_example.png" width="55%">
この例では，countが最初0であり，
   (count(=0) < 3 が真) [gauss -> count+1(=1)]
-> (count(=1) < 3 が真) [gauss -> count+1(=2)]
-> (count(=2) < 3 が真) [gauss -> count+1(=3)]
-> (count(=3) < 3 が偽) [終了]


## Variables
##### (1) 変数の作り方
Variableタグを選択する．
「create variable」ボタンを押すと画面上部にポップアップが表示されるので，そこに変数名を入力する．

変数名の制限は以下の通り．
・先頭の文字はアルファベットのみ使用できる．
・先頭以外の文字では，アルファベット，数字，'_'のいずれか
OK -> a4, b_5, abcde など
NG -> _c, 4d, e!, ?f など
<img src="Instruction/figures/Variable_tag.png" width="30%"> <img src="Instruction/figures/create_variable.png" width="33%"> <img src="Instruction/figures/variable_block.png" width="30%">

##### (2) set 
選択している変数に，つけている数値ブロックの値を代入する．
<img src="Instruction/figures/set_block.png" width="15%"> <img src="Instruction/figures/set_example.png" width="22%">
変数のブロック全てに共通しているが，
変数を複数作っている時にその変数を選ぶことや，変数の名前を変更すること，不要となった変数を消すことも出来る．
<img src="Instruction/figures/set_example2.png" width="27%">

##### (3) change
付けられている数値ブロックの値を変数の値に加える．
下の例では，15であったtest 変数がchange ブロックによって16になる．
<img src="Instruction/figures/change_block.png" width="20%"> <img src="Instruction/figures/change_example.png" width="22%">

##### (4) variable
数値ブロックと同じように他のブロックに連結させて，数値として機能する．
<img src="Instruction/figures/var_block.png" width="10%">
この例では，3回 play を繰り返す．
<img src="Instruction/figures/var_example.png" width="40%">

`;
    var html = marked(text);
    document.getElementById('markdown_preview').innerHTML = html;
  })