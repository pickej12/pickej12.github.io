$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'training', 'profile'],
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });



    $(window).on('scroll', function(){
        let sct=$(window).scrollTop();
        $('.ani').each(function(){
            let secTop = $(this).offset().top;
            sct > secTop - 400 ? $(this).addClass('on') : $(this).removeClass('on'); 
        });
    });
    


    $('.mopen').on('click', function(){  
        $(this).toggleClass('is-active');
        $('#cover').slideToggle();
    });

    let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);

    $('#cove a').on('click', function(){  
        $('#cover').slideUp();
    });

    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });



    //typed
    new Typed('.slogan_txt',{
        strings: ['기본을 중시하는 단단한 구현'],
        typeSpeed:160,
        cursorChar:"",
        loop:true,
        backSpeed:40,
    });

    //-----------------------------------------------------
});