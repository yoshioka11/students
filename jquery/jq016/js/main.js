
$(function(){
  // Ajax
  // Asynchronous JavaScript + XML
  // サーバーと通信 + ページの書き換え
  //非同期:処理が終わる前に次の処理に移る
  $('button').click(function(){
    $("#result").load('more.html',function(){
      $('#message').css('color','red');
    });

  });
});
