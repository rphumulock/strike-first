import '../css/materialize.min.css';
import '../css/style.css';
import '../js/init.js';
import '../js/materialize.min.js';
import boxer from '../assets/boxer.jpg';

(function () {
    'use strict';

    console.log(process.env.NODE_ENV);
    document.getElementById('background').setAttribute('src', boxer);
})();
