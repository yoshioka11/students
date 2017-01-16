
$(function(){
  // focus, blur
  // change
  $('#name')
  .focus(function(){
    $(this).css('background','red');
  })
  .blur(function(){
    $(this).css('background','white');
  });

  $('#members').change(function(){
    alert("かわたよ");
  })
});
