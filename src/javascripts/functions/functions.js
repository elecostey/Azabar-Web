import nav from './nav';
import swiper from './swiper';
import productOverview from './productOverview';
import scroll from './scroll';
import referencesPreview from './referencesPreview';
import getEmailSubject from './getEmailSubject';
import formSubmitHandler from './formSubmitHandler';


const functionsInit = function() {
    $(function() {
        nav();
        swiper();
        productOverview();
        scroll();
        referencesPreview();
        getEmailSubject();
        formSubmitHandler();
    });
};

export default functionsInit;