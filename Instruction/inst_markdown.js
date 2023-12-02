 // 読み込み時に、マークダウンをHTMLに変換して表示
 window.addEventListener('load', function () {

    //`と`の間に、表示したいマークダウンを左詰めで記述する。
    var text = `
##### aaa
*Lorem ipsum* dolor sit amet, consectetur adipiscing elit. 
Curabitur vel quam sit amet ligula volutpat condimentum. 
Sed eu orci vel libero varius suscipit. 
Nullam condimentum dolor nec efficitur semper. 
Nullam condimentum dolor nec efficitur semper. 
Integer eget dui vitae quam gravida iaculis.
- aa
    - aaaa
- aa

a
a
a
aa
a

あ




`
    var html = marked(text);
    document.getElementById('markdown_preview').innerHTML = html;
  })