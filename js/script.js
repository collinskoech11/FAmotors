/**Navbar Scroll animation */

window.addEventListener("scroll", 
	function() {
		var navigator = document.querySelector(".nav");
		navigator.classList.toggle("sticky", window.scrollY > 150);
		});


/**Slider Animation */

const sliderImages = document.querySelectorAll('.slide'),
  arrowLeft = document.querySelector('#arrow-left'),
  arrowRight = document.querySelector('#arrow-right');

let current = 0;

// Init slider
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

// Show previous image
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Show next image
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();



	/**********************/
	/*	Client carousel   */

$('.carousel-client').bxSlider({
	auto: true,
	slideWidth: 234,
	minSlides: 2,
	maxSlides: 5,
	controls: false
});

/**SErvices Page script */

