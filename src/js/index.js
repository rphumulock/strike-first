import Vivus from 'vivus';
import drawing from '../assets/cobrasnek.svg'

(function () {
  /*window.onload = () => {
    let visited = localStorage.getItem("visited");
    if (visited) {
      window.location.assign("home.html");
    } else {
      localStorage.setItem("visited", "true");
      window.location.assign("home.html");*/
  new Vivus('hi-there',
    {
      type: 'delayed',
      duration: 200,
      animTimingFunction: Vivus.EASE,
      duration: 800
    }, () => {
      //  window.setTimeout(() => {
      //  window.location.assign("home.html");
      //}, 5000);
    });
  //}
  //};
})();


