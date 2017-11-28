import Vivus from 'vivus';
import drawing from '../assets/cobrasnek.svg'

(function () {
  window.onload = () => {
    let visited = localStorage.getItem("visited");
    if (visited) {
      window.location.assign("home.html");
    } else {
      localStorage.setItem("visited", "true");
      window.location.assign("home.html");
      /*new Vivus(drawing, { duration: 100 }, () => {
        window.setTimeout(() => {
          window.location.assign("home.html");
        }, 5000);
      });*/
    }
  };
})();


