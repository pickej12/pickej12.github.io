$(function(){
    AOS.init({
        startEvent: 'DOMContentLoaded',
    });

    $('#con01 .slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        vertical:true,

    });
    $('#con01 .btn i.xi-angle-up').on('click',function(){
        $('#con01 .slider').slick('slickPrev');
    });
    $('#con01 .btn i.xi-angle-down').on('click',function(){
        $('#con01 .slider').slick('slickNext');
    });




   $('#con02 .container figure').slick({
       arrows:false,
       asNavFor: '#con02 .container figure',
       autoplay:true,
       autoplaySpeed:5000,
       pauseOnHover:false,
   });


   $('#con02 .slider').on("afterChange", function(e,s,c){

       $(".tab li").eq(c).addClass("on").siblings().removeClass("on");
   });


    $('.tab li').on('click', function(){
        var idx=$(this).index();
        $('.slider figure').slick('slickGoTo', idx);
        $(this).addClass('on').siblings().removeClass('on');
    });


    //con03 ani 적용하기
    // $(window).on('scroll', function(){
    //     let sct=$(window).scrollTop();
    //     $('.ani').each(function(){
    //         let secTop = $(this).offset().top;
    //         sct > secTop - 400 ? $(this).addClass('on') : $(this).removeClass('on'); 
    //     });
    // });

    
    $('#con04 .poster').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        slidesToShow:3,
        dots:true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow:1,
              }
            }
          ]
    });

    $('#con04 .btn i.xi-arrow-right').on('click', function(){
        $('#con04 .poster').slick('slickNext')
    });



    $('#toTop').on('click',function(){
        $('html, body').animate({scrollTop:0},500)
    });
    
    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        sct>1400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
    });




    $('#header .mopen').on('click',function(){
        $('#header .bottom img').toggleClass('on');
        $('#header .top').toggleClass('on');
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });




    var Rsd = $('.ex');

	var slickOptions = {
		infinite:true,
		slidesToShow:1,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:4000,
		// centerMode:flase,
		dots:true,
		arrows:false,
	};

	$(window).on('load resize', function() {
		if($(window).width() > 768) {
			Rsd.slick('unslick');
		}else{
			Rsd.not('.slick-initialized').slick(slickOptions);
		}
	});
});
