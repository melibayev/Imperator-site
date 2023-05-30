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

// increase/ decrease button
const counterElement = document.getElementById('counter');
    const plusButton = document.getElementById('plusButton');
    const minusButton = document.getElementById('minusButton');

    // Initialize the counter
    let counter = 1;
    counterElement.textContent = counter;

    // Add click event listeners to the buttons
    plusButton.addEventListener('click', () => {
      counter++;
      counterElement.textContent = counter;
      updateSumDisplay();
    });

    minusButton.addEventListener('click', () => {
      counter--;
      if (counter < 1) {
        counter = 1
      } 
      counterElement.textContent = counter;
      updateSumDisplay();
});

const counterElement2 = document.getElementById('counter2');
const plusButton2 = document.getElementById('plusButton2');
const minusButton2 = document.getElementById('minusButton2');

// Initialize the counter
let counter2 = 1;
counterElement2.textContent = counter2;

// Add click event listeners to the buttons
plusButton2.addEventListener('click', () => {
    counter2++;
    counterElement2.textContent = counter2;
    updateSumDisplay();
});

minusButton2.addEventListener('click', () => {
    counter2--;
    if (counter2 < 1) {
        counter2 = 1
      } 
    counterElement2.textContent = counter2;
    updateSumDisplay();
});


// Finding Sum of Products
const numberElements = document.querySelectorAll('.number');
    const sumElement = document.getElementById('sum');

// Calculate the sum of the multiplied numbers
function calculateSum() {
    let sum = 0;
    numberElements.forEach((numberElement) => {
        const number = parseInt(numberElement.textContent);
        const multipliedNumber = number * 25000;
        sum += multipliedNumber;
    });
    return sum;
    }

    function formatNumberWithDots(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

function updateSumDisplay() {
    const sum = calculateSum();
    const formattedSum = formatNumberWithDots(sum);
    sumElement.textContent = formattedSum + " Сум";
}
    updateSumDisplay();

// Show Hide 
const togglePassword = document.getElementById("#togglePassword");
const password = document.getElementById("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});


