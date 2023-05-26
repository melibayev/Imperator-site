window.addEventListener("scroll", function () {
    togglenav();
});

let nav = document.getElementById("nav");

function togglenav() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.style.marginTop = "0";
    } else {
        nav.style.marginTop = "42px";
    }
}

// Navbar

function openNavbar() {
    // document.getElementById("navbar-responsive").style.left = "0";
    document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    // document.getElementById("navbar-responsive").style.left = "-100%";
    document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


//   Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})