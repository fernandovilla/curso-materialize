document.addEventListener("DOMContentLoaded", function () {
  initNavbar();
  initSlider();
});

function initNavbar() {
  var elems = document.querySelectorAll(".sidenav");
  var options = {};
  var instances = M.Sidenav.init(elems, options);
}

function initSlider() {
  var elems = document.querySelectorAll(".slider");
  var options = {};
  var instances = M.Slider.init(elems, options);
}
