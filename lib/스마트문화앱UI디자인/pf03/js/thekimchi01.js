$(function(){
//---------------------------------------


$('.main_item').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    fade:true,
});



$('.text').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    pauseOnHover:false,
    fade:true,
});

$('#main_banner a').eq(0).addClass('animation_active');
$('.text').on('afterChange', function(e,s,c){
    $('#main_banner a').eq(c).addClass('animation_active').siblings().removeClass('animation_active');
});




$('#con01 .container').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    dots:true,
});
$('#con01 .arrow i.xi-long-arrow-left').on('click',function(){
    $('#con01 .container').slick('slickNext')
});



AOS.init();



$('.popup_close').on('click',function(){
    $(this).parent().hide();
});



$('#toTop').on('click',function(){
    $('html, body').animate({scrollTop:0},500)
});



$(window).on('scroll',function(){
    var sct=$(window).scrollTop();
    sct>2500 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
    sct>900 ? $('#right_pop').fadeIn() : $('#right_pop').fadeOut();
    $('#right_pop').css({top:500+sct});
});



$('.mopen').on('click',function(){
    $(this).toggleClass('on'); //rotate
    $('#header nav').toggleClass('on');
    $('.ssnav').fadeToggle();
});


$('#header nav>ul>li>a').on('click',function(){
    if($('nav').hasClass('on')) {
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().find('.depth02').slideUp();
    }
});

$(window).on('resize', function(){
    $('.depth02').removeAttr("style")
})






//---------------------------------------
});