document.addEventListener('DOMContentLoaded', () => {

  const prevIcon = document.querySelector('.newsSlider__sliderWrapper-prevIcon')
  const nextIcon = document.querySelector('.newsSlider__sliderWrapper-nextIcon')

  $(".newsSlider__slider").slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: prevIcon,
    nextArrow: nextIcon,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 300,
        settings: "unslick" // destroys slick
      }]
  });

  $('.newsSlider__slider').on('afterChange', function (event, {slideCount: count}, currentSlide, nextSlide) {
    if (currentSlide === 0) {
      prevIcon.classList.add('newsSlider__sliderWrapper-prevIconHidden')
    } else {
      prevIcon.classList.remove('newsSlider__sliderWrapper-prevIconHidden')
    }
  });

})