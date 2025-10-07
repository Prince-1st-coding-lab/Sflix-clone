let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

// Function to show slide by index
function showSlide(index) {
  // wrap around
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  // hide all slides
  slides.forEach(slide => (slide.style.display = "none"));

  // show current
  slides[slideIndex].style.display = "block";
}

// Next & Prev buttons
function NextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function PrevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Auto slide every 5 seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000);

// initialize first slide
showSlide(slideIndex);
