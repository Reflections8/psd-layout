document.addEventListener('DOMContentLoaded', () => {

  $(".intro__sliderWrapper-slider").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear'
  });

})