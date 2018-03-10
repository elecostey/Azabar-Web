const nav = function() {
    const navIcon = $('.header__hamburger');
    const headerNav = $('.header__nav');
    const flag = $('.header__language');
    const languages = $('.header__other-languages');
    const arrow = $('.header__arrow');
    let languagesIsHidden = true;

    navIcon.click(function() {
        headerNav.slideToggle(); 
    });

    flag.click(function() {
        if (languagesIsHidden) {
            languagesIsHidden = false;
            arrow.addClass('header__arrow--up');
            languages.addClass('header__other-languages--open')
        } else {
            languagesIsHidden = true;
            arrow.removeClass('header__arrow--up');
            languages.removeClass('header__other-languages--open')
        }
    });

};

export default nav;