import nav from './nav';
import swiper from './swiper'
import productOverview from './productOverview';

const functionsInit = function() {
    $(function() {
        nav();
        swiper();
        productOverview();

    });
};

export default functionsInit;