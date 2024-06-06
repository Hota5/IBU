
  // Toast Type
  $('.error').click(function(event) {
    toastr.error('OUT OF STOCK')
});


// Handle form submission
$('#contactForm').submit(function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate form submission success
    var formSubmittedSuccessfully = true; // Replace with your actual form submission logic
    
    // Show toast message based on form submission result
    if (formSubmittedSuccessfully) {
        showToast("Message sent successfully!");
        // Redirect to home page after 3 seconds
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    } else {
        showToast("Failed to send message. Please try again.");
    }
});

function showToast(message) {
    toastr.success(message);
}


// Theme swith
var theme=document.getElementById("theme");
const fontIncBtn = document.getElementById('font-inc');
const fontDecBtn = document.getElementById('font-dec');
const body = document.body;
let currentFontSize = 16;

theme.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        theme.src="images/moon.png" ;  
    }else{
        theme.src="images/sun.png";
    }
}

fontIncBtn.addEventListener('click', () => {
    currentFontSize += 2;
    body.style.fontSize = `${currentFontSize}px`;
});

fontDecBtn.addEventListener('click', () => {
    currentFontSize -= 2;
    body.style.fontSize = `${currentFontSize}px`;
});


// new website
function openWebsite1() {
    window.open('https://en.wikipedia.org/wiki/Car_rental', '_blank');
}
function openWebsite2() {
    window.open('https://www.google.com/maps/place/Road+Runner+Rentals/@-57.8832518,-167.0190573,3.13z/data=!4m6!3m5!1s0x6d31897cb80c9967:0xe95a12e2397568da!8m2!3d-43.5077239!4d172.6524109!16s%2Fg%2F11b7rxl6n4?entry=ttu', '_blank');
}
function openWebsite3() {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxGkgzxxWPlmQGpndDbvrMrxRTgZjfXWvkVMDqVnSKBGQmcbNssfbMDqjHMjKdRHgQRpMS', '_blank');
}


// Image enlarger
var modalImg = document.getElementById("modal-img");
var carImages = document.getElementsByClassName("car-image");
for (let i = 0; i < carImages.length; i++) {
    carImages[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}


// closes
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}



// FAQ
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// SPA 
var navLinks = document.querySelectorAll('.nav-link');
var sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").textContent = "Button clicked!";
  });






