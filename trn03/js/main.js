window.addEventListener('scroll', ()=>{
    let sct=window.scrollY;
    sct>0 ? document.querySelector('#hd').classList.add('on') : document.querySelector('#hd').classList.remove('on')
});


const mainSlider = new Swiper('.main_slider', {
    loop:true,
    slidesPerView:2,
    spaceBetween:100,
    autoplay:{
        delay:2000,
    },
    pagination: {
        el: '.main_visual .page',
        type: "fraction",
    },
    navigation: {
        nextEl: '.main_visual .btn_next',
        prevEl: '.main_visual .btn_prev',
    },
    autoplayDisableOnInteraction:false,
});