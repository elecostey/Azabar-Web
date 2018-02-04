import nav from './nav';
import swiper from './swiper';
import productOverview from './productOverview';
import scroll from './scroll';
import referencesPreview from './referencesPreview';

const functionsInit = function() {
    $(function() {
        nav();
        swiper();
        productOverview();
        scroll();
        referencesPreview();
    });
};

export default functionsInit;