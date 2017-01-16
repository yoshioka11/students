//jsファイル
$(function(){
  //before,after -> insertBefire,insertAfter
  //prepend,append
  var li1 = $('<li>').text('jus added');
  var li2 = $('<li>').text('jus added');
  // $('ul > li:eq(1)').before(li);
  $('ul').prepend(li1);
  $('ul').append(li2);
});
