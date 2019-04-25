// client-slider

$('.reviews-client').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: 0,
  centerMode: true,
  dots: true,
  arrows: false
});

// menu

$(".toggle").click(function() {
  $(".header-menu").slideToggle();
$(this).toggleClass("is-active");
});
$(".dropdown").click(function() {
  $(".sub-nav").slideToggle();
  $(this).toggleClass("active");
});

// header-slider

$('.header-slider').slick({
  // autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: 0,
  centerMode: true,
  dots: true,
  arrows: false
});


// projects slider

$('.slider').slick({
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});
