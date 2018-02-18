const nav = function() {
    const navIcon = $('.header__hamburger');
    const headerNav = $('.header__nav');

    navIcon.click(function() {
        headerNav.slideToggle(); 
    });

};

export default nav;