import Swiper from 'swiper';

const swiper = function() {
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
//        autoplay: {
//            delay: 10000,
//            disableOnInteraction: false,
//        },
    });
};

export default swiper;
