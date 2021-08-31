let sliderIndex = 1;

showSlides(sliderIndex);

function nextSlides(iterator) {
   showSlides((sliderIndex += iterator));
}

function currentSlide(iterator) {
   showSlides((sliderIndex = iterator));
}

function showSlides(iterator) {
   let slides = document.getElementsByClassName("slide");

   let dots = document.getElementsByClassName("dot");

   if (iterator > slides.length) sliderIndex = 1;

   if (iterator < 1) sliderIndex = sliderIndex.length;

   for (let index = 0; index < slides.length; index++) {
      slides[index].style.display = "none";
   }

   for (let index = 0; index < dots.length; index++) {
      dots[index].className = dots[index].className.replace("active", "");
   }

   slides[sliderIndex - 1].style.display = "grid";
   dots[sliderIndex - 1].className += " active";
}
