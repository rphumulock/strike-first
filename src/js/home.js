import '../css/materialize.min.css';
import '../css/style.css';
import '../js/init.js';
import '../js/materialize.min.js';
import boxing_ring from '../assets/boxing_ring.jpg';
import boxing_gloves from '../assets/boxing_gloves.jpg';
import video_mp4 from '../assets/Movie.mp4';
import video_webm from '../assets/small.webm';
import isAutoplaySupported from '../js/autoplaycheck.js'

(function () {
    console.log(process.env.NODE_ENV);
    isAutoplaySupported(function (supported) {
        if (supported) {
            // HTML5 Video Autoplay Supported!
            console.log('HTML5 Video Autoplay Supported!');
            // Video Source
            const video_source = document.createElement('source');
            video_source.src = video_mp4;
            document.getElementById('video').appendChild(video_source);
        } else {
            // HTML5 Video Autoplay Not Supported :(
            console.log('HTML5 Video Autoplay Not Supported :(');
            // Image Source
            const image_source = document.createElement('img');
            image_source.src = boxing_gloves;
            document.getElementById('banner-image').appendChild(image_source);
        }
    });
    document.getElementById('background-footer').setAttribute('src', boxing_ring);
})();