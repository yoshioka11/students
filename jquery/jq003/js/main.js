$(function(){
  //セレクタ.メソッド
  //# .
  //> 直下の子要素
  // それ以下の要素
  // ,複数の要素
  // +隣接する要素
  //$("#main .item").css('color','red');
  //$("p, .item").css('color','red');
  $(".item + .item").css('color','red');
});
