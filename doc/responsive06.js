$(function(){

$('.mopen').on('click',function(){
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
});

$('.depth01>li>a').on('click',function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp(); //smenu를 눌렸을 때 열려있던 다른 smenu를 자동으로 닫게 하는 것
    } 
});

$(window).on('resize',function(){
    $('.depth02').removeAttr('style')
})

});