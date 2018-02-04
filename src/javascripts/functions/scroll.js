const scroll = function() {

    const debounce = require('debounce');

    let topOffset = 159;

    function calculateTopOffset() {
        if ($(window).width() < 992) {
            topOffset = 79;
        } else {
            topOffset = 159;
        }
        return topOffset;
    }

    window.onresize = debounce(calculateTopOffset, 200);
    screen.onorientationchange = debounce(calculateTopOffset, 200);

    calculateTopOffset();

    $('.navbar').scrollspy({
        offset: topOffset
    });

    $('.header__link a, .header__brand').click(function () {
        $(this).parent('.header__link').addClass('active');
        $('.header__link a').not(this).parent('.header__link').removeClass('active');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - topOffset
        }, 1000);
        return false;
    });
};

export default scroll;