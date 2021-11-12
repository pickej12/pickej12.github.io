$(function(){
//--------------------------------------------------------

$('#top_banner i').on ('click',function(){
    $(this).parent().parent().parent().slideUp(500);
});




$('.main_visual').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    pauseOnHover:false,
    fade:true,
    dots:true,
});
$('.main_visual figure').eq(1).addClass('on');

$('.main_visual').on('afterChange',function(e,s,c){
    $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');
});




$('.pr_slider').slick({
    arrows:false,
    slidesToShow:3,
    autoplay:true,
    autoPlaySpeed:5000,
    pauseOnHover:false,
    pauseOnFocus:false,
});

$('.pr_slider figure').eq(4).addClass('on');
$('.pr_slider').on('afterChange',function(e,s,c){
    $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});

$('#con01 .btn i.xi-angle-left-thin').on('click',function(){
    $('.pr_slider').slick('slickPrev');
});
$('#con01 .btn i.xi-angle-right-thin').on('click',function(){
    $('.pr_slider').slick('slickNext');
});



$('#mv01').YTPlayer({
    videoURL:'https://www.youtube.com/embed/oWRtllOQI1M',
    containment:'self',
    autoPlay:true,
    mute:true,
    startAt:0,
    opacity:1,
    showControls:true,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

$('#con05 i.xi-pause').on('click', function(){
    $('#mv01').YTPPause();
});
$('#con05 i.xi-play').on('click', function(){
    $('#mv01').YTPPlay();
});
$('#con05 i.xi-tv').on('click', function(){
    $('#mv01').YTPFullscreen();
});




$('#to_top').on('click',function(){
    $('html, body').animate({scrollTop:0},500)
});

$(window).on('scroll',function(){
    var sct=$(window).scrollTop();
    sct>2000 ? $('#to_top').fadeIn() : $('#to_top').fadeOut();
    $('#scroll_banner').css({top:300+sct});
});




//--------------------------------------------------------
});