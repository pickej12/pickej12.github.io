$(function(){
    //----------------------------------------------------------------------------------
    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('.header .bottom').addClass('on')
        }else{
            $('.header .bottom').removeClass('on')
        }
    });



    $('.header .right').on('click', function(){
        $(this).toggleClass('on');
        $('.category').slideToggle();
    });
  


    $('#bgndVideo').YTPlayer({
        videoURL:'https://youtu.be/eQvMvBMYwFo',
        containment:'#mainVisual',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false,
        coverImage:true,
    });



    $('.tab_menu>li').on('click',function(){
        var $this=$(this);
        var idx=$(this).index();
        $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
        $this.addClass('on').siblings().removeClass('on');
    });



    $('#mv01').YTPlayer({
        videoURL:'https://youtu.be/5ZMjj3VpDr0',
        containment:'self',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false, 
        playOnlyIfVisible:true, 
        optimizeDisplay:false,
    });



    AOS.init();



    $('.slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        slidesToShow:3,
        pauseOnHover:false,
        infinite: true,
        dots:true,
        asNavFor:".all",
    });

    $('.all').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        infinite: true,
        asNavFor:".slider",
    });



    $('.toTop').on('click',function(){
        $('html, body').animate({scrollTop:0},500)
    });

    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        sct>1500 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
    });



    $('.right_banner i').on('click',function(){
        $('.right_banner').toggleClass('on');
        $(this).toggleClass('on')
    });
    //----------------------------------------------------------------------------------
});