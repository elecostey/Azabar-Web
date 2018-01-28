'use strict';

// Make jquery available
import jQuery from 'jquery';
import 'swiper/dist/css/swiper.css';

window.$ = jQuery;

// Other javascript files
import functionsInit from './functions/functions';

const App = function() {
    this.initializeApp = function() {
        functionsInit();
    };
};

const app = new App();
app.initializeApp();