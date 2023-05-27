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
$('#owl-one').owlCarousel({
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
$('#owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#owl-three').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
})
$('#owl-four').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
})
$('#owl-five').owlCarousel({
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
$('#owl-six').owlCarousel({
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
$('#owl-seven').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
})



