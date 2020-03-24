/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex +=n);
}

function currentSlide(n){
  showSlides(slideIndex =n)
}
function showSlides(n) {
  var i;
  var slides=document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n>slides.length) {slideIndex=1}
  if (n<1) {slideIndex=slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className=dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//https://wpdatatables.com/css-image-gallery/ 
// https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp 