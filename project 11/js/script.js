
window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.backtop');
    scroll.classList.toggle("active" , window.scrollY>500)
})	

function scrolltotp(){
	window.scrollTo({top:0,behavior:'smooth'})
}

// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');

;(function ($) {

	'use strict'; 

$('.content h3 span').counterUp({
    delay: 10,
    time: 1000
});
})(jQuery);