var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// var reviewsSlider = new Swiper(".reviews-slider", {
//   loop: true,
//   navigation: {
//     nextEl: ".slider-button--next-2",
//     prevEl: ".slider-button--prev-3",
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
// });
