import '../css/materialize.min.css';
import '../css/style.css';
import '../js/init.js';
import '../js/materialize.min.js';
import boxing_ring from '../assets/boxing_ring.jpg';
import boxer from '../assets/boxer.jpg';
import ish from '../assets/Ish.jpg';
import vid1 from '../assets/mov.mp4';

console.log(process.env.NODE_ENV);

document.getElementById('background2').setAttribute('src', boxing_ring);
document.getElementById('video').setAttribute('src', vid1);
document.getElementById('vid').setAttribute('src', vid1);

