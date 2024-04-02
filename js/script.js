// -------------------Sticky Nav BAr-------------------

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();
  
    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });
  
  // -------------------Mobile Nav Bar-------------------
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  const header = document.querySelector(".page-header");
  const toggleClass = "is-sticky";
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
  });
  
  // -------------------OWl Carousel-------------------
  $(".banner-slider").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    items: 1,
    dots: false,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        dots: true,
        nav: false,
        loop: true,
      },
    },
  });




 