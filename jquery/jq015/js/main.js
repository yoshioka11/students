
$(function(){
  $('button').click(function(){
    var p = $('<p>').text('vanish').addClass('vanish');
    $(this).before(p);
  });
  $('body').on('click','.vanish',function(){
    $(this).remove();
  })

});
