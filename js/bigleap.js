var swiper = new Swiper(".bigleap", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //     delay: 7500,
  //     disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 80,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    1366: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    1920: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});
