
$(function(){
  // Ajax
  // Asynchronous JavaScript + XML
  // サーバーと通信 + ページの書き換え
  // 非同期: 処理が終わる前に次の処理に移る
  // $.post
  // $.get
  $('#greet').click(function(){
      $.get('greet.php',{
        name:$('#name').val()
      },function(data){
          $('#result').html(data.message+'('+data.length+')');
      })
  })
});
