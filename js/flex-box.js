//IMAGE GRID FLEX BOX JS STARTS HERE
const $body = document.querySelector('body');
let scrollPosition = 0;

function openModal() {
  	document.getElementById("myModal").style.display = "flex";
	  scrollPosition = window.pageYOffset;
	  $body.style.overflow = 'hidden';
	  $body.style.position = 'fixed';
	  $body.style.top = `-${scrollPosition}px`;
	  $body.style.width = '100%';
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
	$body.style.removeProperty('overflow');
    $body.style.removeProperty('position');
    $body.style.removeProperty('top');
    $body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
}
//IMAGE GRID FLEX BOX JS ENDS HERE