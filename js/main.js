// ========= Navbar changes color on scroll =============
$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
        $('.navbar').addClass('scroll');
      } else {
        $('.navbar').removeClass('scroll');
      }
  });
});

// ========smooth scroll==============
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600
  });
  
  $(".navbar-nav .nav-link").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
  