import Swiper from 'swiper';

const swiper = function() {
    new Swiper('.swiper-container--business-solutions', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
    });

    new Swiper('.swiper-container--references', {
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    new Swiper('.swiper-container--text', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
      });
};

export default swiper;
