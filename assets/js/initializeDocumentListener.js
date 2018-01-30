// Initiate html document listeners

/*Author: Matthew Mackay
Date: December 30th, 2017
for use involving class or id variables.
Function reference should remain, 
edit the class/id requirements as needed. 

Dependencies:
jQuery 3.2.1*/

$(document).ready(function(){
	"use strict";
	$(".innerA").on('click', function(event) {
		if(this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });


		}
	});
	
	$("#pageScroll").on('click', function(event) {
	if(this.hash !== "") {
		event.preventDefault();

		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
	  });


	}
	});
});