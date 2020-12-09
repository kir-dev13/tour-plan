$(document).ready(function () {
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

  const modalButton = $("[data-toggle=modal]");

  const closeButton = $(".modal__close");

  let modalOverlay = $(".modal__overlay");
  let modaldialog = $(".modal__dialog");

  function openModal() {
    modalOverlay.addClass("modal__overlay--visible");
    modaldialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal__overlay--visible");
    modaldialog.removeClass("modal__dialog--visible");
  }

  modalButton.on("click", openModal);
  closeButton.on("click", closeModal);

  let menuButton = document.querySelector(".menu-btn");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-menu")
      .classList.toggle("navbar-menu--visible");
  });
  AOS.init();
});
