jQuery(document).ready(function($) {
  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
  });

  $('.hero-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
     //remove all active class
     $('.hero-slider-nav .slick-slide').removeClass('slick-current');
     //set active class for current slide
     $('.hero-slider-nav .slick-slide').eq(currentSlide).addClass('slick-current');
  });

  $('.hero-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.hero-slider',
    focusOnSelect: true,
    vertical: true,
  });
});
