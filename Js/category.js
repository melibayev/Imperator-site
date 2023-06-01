window.addEventListener("scroll", function () {
    togglenav();
});

let nav = document.getElementById("nav");

function togglenav() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 100) {
        nav.style.marginTop = "0";
        nav.style.backgroundColor = "#FAFAFA";
        
    } else {
        nav.style.marginTop = "42px";
        nav.style.backgroundColor = "transparent";
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



  // BACKTOP function
window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backtop.style.bottom = "50px";
    } else {
        backtop.style.bottom = "-50px";
    }
}