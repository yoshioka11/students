//jsファイル
$(function(){
  //せれくた.メソッド
  //属性せれくた
  //=　等しい
  //!= 等しくない
  //*=　含む
  // ^=　先頭から
  //$=　終わりがそうである
  //$('a[href="http://google.com"]').css('background','red');
  //$('a[href!="http://google.com"]').css('background','red');
  $('a[href$="p"]').css('background','red');
});
