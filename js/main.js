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

  //Обработка форм
  $(".send-form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please, enter your name",
          minlength: "Name must be longer than one symbol",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "The phone number is required",
          minlength: "Phone number must be longer than eight digits",
        },
      },
    });
  });
  // Маска
  $('input[name="phone"]').mask("+7 (000) 000-0000");
});
