$(function(){
//-----------------------------------------------------------
$('#top_banner i').on('click',function(){
    $('#top_banner').slideUp(200); //200=0.2초/1000이 1초/기본값은 400=0.4초
});

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false, //마우스 올렸을 때 멈추게 기본설정/올렸을때도 슬릭하려면 이렇게 설정
    pauseOnFocus:false,
    fade:true,
    speed:1000,
});

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
});



$('#link select').on('change', function(){
    var lnk = $(this).val();
    if(lnk) window.open(lnk);
});



$('.mopen').on('click', function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('on');
});
















//-----------------------------------------------------------
});