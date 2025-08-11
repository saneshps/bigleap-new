var swiper = new Swiper(".instagram", {
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1366: {
      slidesPerView: 7,
      spaceBetween: 0,
    },
    1920: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  },
});
