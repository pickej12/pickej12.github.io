$(function(){
    AOS.init({
        startEvent: 'DOMContentLoaded',
    });

    //popup
    // const $popup = $('.popup');
    // const hour = 24; // 24시간 동안 팝업 숨기기

    // // 닫기 버튼 클릭 시 팝업 숨기기와 쿠키 설정
    // $popup.on('click', '.close', function(e) {
    //     e.preventDefault();
    //     const hidePopup = $('.today_chk').prop('checked'); // 팝업을 숨길지 여부
    //     if (hidePopup) {
    //         const d = new Date();
    //         d.setTime(d.getTime() + (hour * 60 * 60 * 1000));
    //         const expires = `expires=${d.toUTCString()}`;
    //         document.cookie = `hidePopup=true; ${expires}; path=/`; // 쿠키 설정
    //     }
    //     $popup.hide();
    // });

    // // 쿠키 확인하여 팝업을 보여줄지 결정
    // if (document.cookie.indexOf('hidePopup=true') >= 0) {
    //     $popup.hide(); // 팝업 숨기기
    // } else {
    //     $popup.show(); // 쿠키가 없으면 팝업을 보여줌
    // }



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


    
    $('#con04 .poster').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        slidesToShow:2,
        dots:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow:1,
              }
            }
          ]
    });

    $('#con04 .btn .xi-angle-left').on('click', function(){
        $('#con04 .poster').slick('slickPrev')
    });
    $('#con04 .btn .xi-angle-right').on('click', function(){
        $('#con04 .poster').slick('slickNext')
    });



    $('#video01').YTPlayer({
        videoURL:'https://youtu.be/xjxBR0uwtWc',
        containment:'self',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true,
        optimizeDisplay:false,
    });
    
    $('.park_video').on('click', function(){
        $('#video01').YTPFullscreen();
    });



    $('#right_pop .xi-plus').on('click',function(){
        $('.action-list').toggleClass('on');
        $(this).toggleClass('on')
    });


    
    $('#toTop').on('click',function(){
        $('html, body').animate({scrollTop:0},500)
    });
    
    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        sct>1000 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
    });



    $('#header .mopen').on('click',function(){
        $('#header .bottom img').toggleClass('on');
        $('#header .top').toggleClass('on');
        $('.gnb').toggleClass('on');
        $('.right').toggleClass('on');
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
		if($(window).width() > 1024) {
			Rsd.slick('unslick');
		}else{
			Rsd.not('.slick-initialized').slick(slickOptions);
		}
	});
});
