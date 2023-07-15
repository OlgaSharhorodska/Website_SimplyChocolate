// Swiper for reviews
const reviewsSwiper = new Swiper('.slide-container', {
  slidesPerView: 1,
  // slidesPerGroup: 2,
  spaceBetween: 28,
  // centerInsufficientSlides: true,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 18,
  width: 335,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      width: 559,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
      width: 1136,
    },
  },
});