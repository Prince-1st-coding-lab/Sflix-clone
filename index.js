let slides = document.querySelectorAll(".slide");
console.log(slides);

let slideIndex = 0;
function NextSlide(n){
if (slideIndex >= slides.length - 1) {
        slideIndex = 0 ;
    }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

    slides[n].style.display = "block";
    slideIndex += 1;
}
NextSlide(slideIndex);