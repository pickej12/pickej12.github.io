$(function(){
//----------------------------------------------------------------------------------

//사이트맵 만들기
let allMenu=$(".gnb").clone();
allMenu.find("*").removeAttr("class");
allMenu.addClass("total").removeClass().attr({id:"allMenu"});
$(".gnb").append(allMenu); //소스검사하기 allMenu 랑 타고들어갔을때 allMenu

$(".right .xi-bars").on("click", function(){
    $("#allMenu").toggle();
});

//mainSlide
const mS=$('.mainSlide').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
});
$('.mainSlide figure').eq(1).addClass('on');

$('.mainSlide').on('afterChange',function(e,s,c){
    $('.mainSlide figure').eq(c+1).addClass('on').siblings().removeClass('on');
});

$('.main_visual .btn span').on('click',function(){
    $('.mainSlide').slick('slickNext');
});

$('.main_visual .bar').addClass('animation_active');
mS.on('beforeChange', function(e,s,c,n){
    $('.main_visual .bar').removeClass('animation_active');
});

mS.on('afterChange',function(e,s,c){
    $('.main_visual .bar').addClass('animation_active');
}); 



$('.dr_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow:4,
    pauseOnHover:false,

    responsive: [
        {
          breakpoint:769,
          settings: {
          slidesToShow:2,
          }
        },
    ] 
});



$(window).on('scroll', function(){
    let sct=$(window).scrollTop();
    $('.ani').each(function(){
        let secTop = $(this).offset().top;
        sct > secTop - 400 ? $(this).addClass('on') : $(this).removeClass('on'); 
    });
});

$('.con04 .left').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    dots:true,
});


$('.toTop').on('click',function(){
    $('html, body').animate({scrollTop:0},500)
});


$('.mopen').on('click', function(){
    $('.header .top').toggleClass('on');
    $('.header .bottom img').toggleClass('on');
    $('.header .bottom nav').toggleClass('on');
    $(this).toggleClass('on');
});

$('.header nav>ul>li>a').on('click',function(){
    if($('nav').hasClass('on')) {
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().find('.depth02').slideUp();
    }
});

$(window).on('resize', function(){
    $('.depth02').removeAttr("style")
})

//----------------------------------------------------------------------------------
});
