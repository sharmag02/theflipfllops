
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


function openTab(evt, batchcontent) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(batchcontent).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
  social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
  social_panel_container.classList.remove('visible')
});


var slideshowContainers = document.getElementsByClassName("slideshow-container");

for(let s = 0; s < slideshowContainers.length; s++) {
      
    var cycle = slideshowContainers[s].dataset.cycle;
    
    var slides = slideshowContainers[s].querySelectorAll('.mySlides');
    var slideIndex = 0;
   
    showSlides(slides, slideIndex, cycle);
};


function showSlides(slides, slideIndex, cycle) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = "block";
   
    setTimeout(function() {
        showSlides(slides, slideIndex, cycle)
    }, cycle);
};




function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Function to close the modal by unique ID
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none";
      }
  }
}





