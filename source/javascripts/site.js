//= require bootstrap-sprockets

jQuery(document).ready(function($) {
  $('.resource-type-filter-dropdown a').on('click', function(e){
    e.preventDefault();
    $('.resource-type-filter').toggleClass('visible-lg');
  });
  
  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          vertical: false,
          swipeToSlide: true
        }
      }
    ]
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
    autoplay: true
  });
});
