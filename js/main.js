var hotelSlider = new Swiper(".hotel-swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".hotel-slider-button--next",
    prevEl: ".hotel-slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var reviewSlider = new Swiper(".reviews-swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

let menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", function () {
  console.log("клик");
  document
    .querySelector(".navbar-menu")
    .classList.toggle("navbar-menu--visible");
});
