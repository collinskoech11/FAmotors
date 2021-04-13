/**Navbar Scroll animation
 * =====================================================================================================
 */

window.addEventListener("scroll", 
	function() {
		var navigator = document.querySelector(".nav");
		navigator.classList.toggle("sticky", window.scrollY > 150);
		});


    window.addEventListener("scroll", 
      function() {
        var navigator = document.querySelector(".nav");
        navigator.classList.toggle("stickyagain", window.scrollY > 300);
        });

/**Slider Animation 
 * ============================================================================================================================
*/
const delay = 3000; //ms

 const slides = document.querySelector(".slides");
 const slidesCount = slides.childElementCount;
 const maxLeft = (slidesCount - 1) * 100 * -1;
 
 let current = 0;
 
 function changeSlide(next = true) {
   if (next) {
     current += current > maxLeft ? -100 : current * -1;
   } else {
     current = current < 0 ? current + 100 : maxLeft;
   }
 
   slides.style.left = current + "%";
 }
 
 let autoChange = setInterval(changeSlide, delay);
 const restart = function() {
   clearInterval(autoChange);
   autoChange = setInterval(changeSlide, delay);
 };
 
 // Controls
 document.querySelector(".next-slide").addEventListener("click", function() {
   changeSlide();
   restart();
 });
 
 document.querySelector(".prev-slide").addEventListener("click", function() {
   changeSlide(false);
   restart();
 });
 

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

