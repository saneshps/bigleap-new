var swiper = new Swiper(".history", {
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
