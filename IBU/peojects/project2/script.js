  // Toast Type
  $('.error').click(function(event) {
    toastr.error('OUT OF STOCK')
});

// Theme swith
var theme=document.getElementById("theme");

theme.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        theme.src="images/moon.png" ;  
    }else{
        theme.src="images/sun.png";
    }
}




// Image inlarger
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




  