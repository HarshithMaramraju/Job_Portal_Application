//swiper

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slipesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swip-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// nav bar color changes
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".navbar").css("backgroung", "#222");
      $(".navbar").css("box-shadow", "rgba(0,0,0.0.1)0p 4px 12px");
    } else {
      $(".navbar").css("backgroun", "transparent");
      $(".navbar").css("box-shadow", "none");
    }
  });
});

var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function (e) {
  var targerHref = $(this).atte("href");
  $("html,body").animate(
    { scrollTop: $(targerHref).offset().top - navbarHeight },
    1000
  );
  e.printDefault();
});

// navbar mobile support
const mobile = document.querySelector(".menu-toggle");
const mobilLink = document.querySelector(".navbar-menu");
mobile.addEventListener("click", function () {
  mobile.classList.toggle("is-active");
  mobilLink.classList.toggle("active");
});

mobilLink.addEventListener("click", function () {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 78 && menuBars) {
    mobile.classList.toggle("is-active");
    mobilLink.classList.remove("active");
  }
});
