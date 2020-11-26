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
