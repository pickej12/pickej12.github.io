$(function(){
    //----------------------------------------------------



    $('#top_banner i').on('click',function(){
        $(this).parent().parent().parent().slideUp();
    });



    $('.main_visual').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
    });
    $('.main_visual figure').eq(1).addClass('on');

    $('.main_visual').on('afterChange',function(e,s,c){
        $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');
    });




    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow:3,
    });
    $('#con01 .btn i.xi-angle-left').on('click',function(){
        $('.pr_slider').slick('slickPrev');
    });
    $('#con01 .btn i.xi-angle-right').on('click',function(){
        $('.pr_slider').slick('slickNext');
    });



    $(window).on('scroll', function(){
        let sct=$(window).scrollTop();
        $('.ani').each(function(){
            let secTop = $(this).offset().top;
            sct > secTop - 400 ? $(this).addClass('on') : $(this).removeClass('on'); 
        });
        $('#right_pop').css({top:120+sct});
    });






    
    
    
    //----------------------------------------------------
});