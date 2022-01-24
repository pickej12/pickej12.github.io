$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
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
    
    //My name is EunJi
    // new Typed('.slogan_txt',{
    //     strings: ['Hello! Everyone', 'My name is EunJi'],
    //     typeSpeed:100,
    // });

    $('.mopen').on('click', function(){  //click mouseenter>마우스 올렸을 때/click mouseleave 마우스가 떨어졌을 때
        $(this).toggleClass('is-active');
        $('#cover').slideToggle();
    });

    let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);

    $('#cove a').on('click', function(){  //click mouseenter>마우스 올렸을 때/click mouseleave 마우스가 떨어졌을 때
        $('#cover').slideUp();
    });

    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });

    //-----------------------------------------------------
    })