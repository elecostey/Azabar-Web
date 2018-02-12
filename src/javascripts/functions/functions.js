import nav from './nav';
import swiper from './swiper';
import productOverview from './productOverview';
import scroll from './scroll';
import referencesPreview from './referencesPreview';
import getEmailSubject from './getEmailSubject';
import formSubmitHandler from './formSubmitHandler';
import togglePipeVisibility from './togglePipeVisibility';

const debounce = require('debounce');

const functionsInit = function() {
    $(function() {
        nav();
        swiper();
        productOverview();
        scroll();
        referencesPreview();
        getEmailSubject();
        formSubmitHandler();
        togglePipeVisibility();
    });
};

if ('addEventListener' in window) {
    const handleResize = debounce(function() {
        togglePipeVisibility();
    }, 250);
 
    window.addEventListener('resize', handleResize);
}

export default functionsInit;