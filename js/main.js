// ========= Navbar changes color on scroll =============
$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 150 ) {
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
  

  // ========type animation==============
  new TypeIt("#type-effect--1", {
    strings: "The Right Time To Show Your Work Worldwide",
    speed: 50,
    waitUntilVisible: true,
    loop: true,
    loopDelay: 3000
  }).go();
  new TypeIt("#type-effect--2", {
    strings: "The Right Time To Show Your Work Worldwide",
    speed: 50,
    waitUntilVisible: true,
    loop: true,
    loopDelay: 3000
  }).go();
  new TypeIt("#type-effect--3", {
    strings: "The Right Time To Show Your Work Worldwide",
    speed: 50,
    waitUntilVisible: true,
    loop: true,
    loopDelay: 3000
  }).go();