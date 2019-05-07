// client-slider

$('.reviews-client').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: 0,
  centerMode: true,
  pauseOnDotsHover: true,
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
  autoplay: true,
  infinite: true,
  pauseOnDotsHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: 0,
  centerMode: true,
  dots: true,
  arrows: false
});


// projects slider

$('.portfolio__projects').slick({
  // autoplay: true,
  focusOnSelect: true,
  // mobileFirst: true,
  centerPadding: '0',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1
      }
    }
  ]
});


