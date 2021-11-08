$(function(){

$('#header i').on ('click',function(){
   $('nav').toggle(); //toggle 보였다 안 보였다
});

$(window).on('resize',function(){
    $('nav') .removeAttr('style');
});



});