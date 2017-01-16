//jsファイル
// console.dir(window);
// console.log(window.outerHeight);
//window.document -今開いているページ
//document object model (DOM);
var e = document.getElementById("msg");
e.textContent = "hello";
e.style.color = "red";
e.className = 'myStyle';
/*
body
      p
            text
*/

document.getElementById('add').addEventListener('click',function(){
  var greet = document.createElement('p'),
      text = document.createTextNode('hello world');
      //appendchild=子要素の最後に追加する
  document.body.appendChild(greet).appendChild(text);

});
