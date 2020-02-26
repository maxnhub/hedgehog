var newsSwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4500,
    },
    spaceBetween: 0,
    navigation: {
        nextEl: '.content__slider-arrow--next',
        prevEl: '.content__slider-arrow--prev',
    }
  
  });