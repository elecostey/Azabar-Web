const nav = function() {
    const navIcon = $('.header__hamburger');
    const headerNav = $('.header__nav');

    navIcon.click(function() {
        if (headerNav.hasClass('header__nav--visible')) {
            headerNav.removeClass('header__nav--visible');
        } else {
            headerNav.addClass('header__nav--visible');
        }

    });

};

export default nav;