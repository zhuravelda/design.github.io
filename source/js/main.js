// client-slider

$('.reviews-client').slick({
  // autoplay: true,
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
