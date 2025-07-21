var swiper = new Swiper(".prolatest", {
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  spaceBetween:30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});