    new Swiper('.photo__slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    resizeReInit: true,
    updateOnWindowResize: true,
    adaptiveHeight: true,
    breakpoints: {
      320: {
          spaceBetween: 10,
        },
      760: {
          spaceBetween: 10,
        },
        1200: {
          spaceBetween: 10,
        },
        1440: {
          spaceBetween: 12,
        },
        1920: {
          spaceBetween: 15,
        },
        2560: {
          spaceBetween: 20,
        },
      }
  });


