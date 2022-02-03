$(function(){
//-------------------------------------------------------------------------------
$('#main').fullpage({
    responsiveWidth:769,
    anchors:['c01','c02','c03','c04','footer'],
    afterLoad:function(origin, destination, direction){
        let txt = $('.navbar>li').eq(destination.index).find('a').text();
        $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
        $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
        if(!$('nav').hasClass('on')) {
            destination.index===0 ? $('.header').fadeIn() : $('.header').slideUp();
        }
        //메뉴를 클릭했을 떄 헤드에서 스타일을 때준다.
        //if(!$('nav').hasClass('on')) $('.header').removeAttr('style');
        
        
    },
    
});

$(".con02Wrap .schedule .content ul").on("mousewheel scroll",function(e){
    e.stopPropagation();
}); 


$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    dots:true,
});

$('.main_slider').eq(1).addClass('on');
$('.main_slider').on('afterChange',function(e,s,c){
    $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
});
//질문! 슬라이드 될때 올라오는 법 //



$('.tab_menu>ul>li').on('click',function(){
    var $this=$(this);
    var idx=$(this).index();
    $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    $this.addClass('on').siblings().removeClass('on');
});




$('.popUp figure').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    dots:true,
});



$('.con03Slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    pauseOnHover:false,
    dots:false,
});

$('.con03Content .con03_01 .btn i.xi-angle-left').on('click',function(){
    $('.con03_01 .con03Slider').slick('slickPrev');
});
$('.con03Content .con03_01 .btn i.xi-angle-right').on('click',function(){
    $('.con03_01 .con03Slider').slick('slickNext');
});
$('.con03Content .con03_02 .btn i.xi-angle-left').on('click',function(){
    $('.con03_02 .con03Slider').slick('slickPrev');
});
$('.con03Content .con03_02 .btn i.xi-angle-right').on('click',function(){
    $('.con03_02 .con03Slider').slick('slickNext');
});
$('.con03Content .con03_03 .btn i.xi-angle-left').on('click',function(){
    $('.con03_03 .con03Slider').slick('slickPrev');
});
$('.con03Content .con03_03 .btn i.xi-angle-right').on('click',function(){
    $('.con03_03 .con03Slider').slick('slickNext');
});




$('#mv01').YTPlayer({
    videoURL:'https://youtu.be/0I4YYHKJ2N0',
    containment:'self',
    autoPlay:true,
    mute:true,
    startAt:0,
    opacity:1,
    showControls:false,
    playOnlyIfVisible:true,
    optimizeDisplay:false,
});

$('.con04 i.xi-tv').on('click', function(){
    $('#mv01').YTPFullscreen();
});



$('.search i').on('click', function(){
    $(this).toggleClass('on');
    $('.search_form').toggleClass('on');
});



let allMenu=$(".gnb").clone();
allMenu.find("*").removeAttr("class");
allMenu.addClass("total").removeClass().attr({id:"allMenu"});
$(".siteMap").append(allMenu);//$(".")<- 위치 설정!(나오고 싶은 위치)

$(".siteMap").on("click", function(){
    $("#allMenu").slideToggle();
});



$('.mopen').on('click', function(){
    $('.header').removeAttr('style');
    $(this).toggleClass('on');
    //$('.header').slideToggle();
    $('nav').toggleClass('on');
})



$('nav .depth01>li').on('click', function(){
    if($('nav').hasClass('on')) {
        $(this).addClass('on').siblings().removeClass('on');
        $(this).siblings().find('.depth03').stop().slideUp();
    }

});

$('.depth02>ul>li').on('click', function(){
    if($('nav').hasClass('on')) {
        $('.depth03').stop().slideUp();
        $(this).find('.depth03').stop().slideToggle();
    }
})

$(window).on('resize', function(){
    $('.depth02').removeAttr('style');
    $('.depth03').removeAttr('style');
    $('nav').removeClass('on');
});



$('.toTop').on('click',function(){
    $('html, body').animate({scrollTop:0},500)
});

$(window).on('scroll',function(){
    var sct=$(window).scrollTop();
    sct>1200 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
});
//-------------------------------------------------------------------------------
});
