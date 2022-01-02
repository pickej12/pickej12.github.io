$(function(){
//-------------------------------------------------------------------------------
$('#main').fullpage({
    anchors:['c01','c02','c03','c04','c05','footer'],
    // navigation:true,
    afterLoad:function(origin, destination, direction){
        let txt = $('.navbar>li').eq(destination.index).find('a').text();
        $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
        $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
        destination.index===0 ? $('.header').fadeIn() : $('.header').fadeOut();
        // destination.index===0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
    },
});

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    dots:true,
});



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
//-------------------------------------------------------------------------------
});