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

    $('.header__link, .header__brand').click(function () {
        $(this).addClass('active');
        $('.header__link').not(this).removeClass('active');
        let sectionId = $(this).attr('href');
        if ($(this).hasClass('header__link')) {
           sectionId = $(this).children().attr('href');
        }
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top - topOffset
        }, 1000);
        return false;
    });
};

export default scroll;