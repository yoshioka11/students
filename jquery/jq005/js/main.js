//jsファイル
$(function(){
  //セレクタ.メソッド
  //メソッドを使ったDOM要素の指定
  //parent(),children()
  //next().prev()
  //siblings -兄弟要素
  // $("#sub").parent().css('color','red');
  // $("#sub").children().css('color','red');
  //$("#sub > li:eq(2)").prev().css('color','red');
  $("#sub > li:eq(2)").siblings().css('color','red');
});
