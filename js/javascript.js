// NAVBAR
$(document).on("scroll", function () {

  if ($(document).scrollTop() > 100) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }

});


// CAROUSEL
$(document).ready(function () {
  $('.slick-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: '<div class="slick-next slick-arrow"><i class="fi-xnllxl-chevron"></i></div>',
    nextArrow: '<div class="slick-prev slick-arrow"><i class="fi-xnlrxl-chevron"></i></div>'
  });
});


// MANUAL JS

mobileNavOpen = document.getElementById('ham-open')
mobileNavClose = document.getElementById('ham-close')
mobileNavLinks = document.querySelector('.mob-nav-links');

mobileNavOpen.addEventListener("click", e => {
  mobileNavLinks.style.display = "block"
  mobileNavOpen.style.display = "none"
  mobileNavClose.style.display = "block"

  console.log("Mobile Nav Open")
});

mobileNavClose.addEventListener("click", e => {
  mobileNavLinks.style.display = "none"
  mobileNavOpen.style.display = "block"
  mobileNavClose.style.display = "none"

  console.log("Mobile Nav Close")


});

window.addEventListener('scroll', e => {
  mobileNavLinks.style.display = "none"
  mobileNavOpen.style.display = "block"
  mobileNavClose.style.display = "none"

})


// outClick = document.querySelector('.navbar')
// window.addEventListener('click', function (e) {
//   if (outClick.contains(e.target)) {
//     return
//   } else {
//     mobileNavLinks.style.display = "none"
//     mobileNavOpen.style.display = "block"
//     mobileNavClose.style.display = "none"

//   }
// });


