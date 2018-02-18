const scroll = function() {

    $('.header__link--home, .header__brand--home').click(function () {
        let sectionId = $(this).attr('href');
        if ($(this).hasClass('header__link')) {
            sectionId = $(this).children().attr('href');
            $(this).addClass('active');
            $('.header__link').not(this).removeClass('active');
        }
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top
        }, 1000);
        return false;
    });
};

export default scroll;