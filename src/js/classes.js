import '../css/materialize.min.css';
import '../css/style.css';
import '../js/init.js';
import '../js/materialize.min.js';
import ish from '../assets/Ish.jpg';

console.log(process.env.NODE_ENV);

document.getElementById('background3').setAttribute('src', ish);
