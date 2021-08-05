
window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.backtop');
	var hed = document.querySelector('nav');
    scroll.classList.toggle("active" , window.scrollY>500),
	hed.classList.toggle("header1" , window.scrollY>300)
})		

function scrolltotp(){
	window.scrollTo({top:0,behavior:'smooth'})
}



var btn = document.querySelector('.hubrger');
var ulss = document.querySelector('.ulss');

btn.onclick = function(){
    "use strict";

    console.log("hello");
	ulss.classList.toggle("toggle1");
}
btn.onblur = function(){
    "use strict";
	ulss.classList.toggle("toggle1");
}