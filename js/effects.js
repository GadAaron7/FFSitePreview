$(document).ready(function() {

	var btn_back_to_top = $(".btn-back-to-top");

	$(window).on("scroll", function() {

		var window_from_top = $(this).scrollTop();


		if(window_from_top > 1800) {
			if(!btn_back_to_top.is(':visible')) {
				btn_back_to_top.fadeIn("fast");
			}
			
		}
		else {
			btn_back_to_top.fadeOut("fast");
		}
	});
	/*show back to top button*/


	btn_back_to_top.click(function() {
		$("html,body").animate({scrollTop : 0}, "slow");
	});
	/*animate to top*/


	var nav_section = $(".navigation-link");

	nav_section.click(function(e) {
		var section = $(this).attr("href");

		$("html,body").animate({
			scrollTop : $(section).offset().top
		}, "slow");
		e.preventDefault();
		
	});


	var nav_toggle = $(".btn-toggle-nav");

	nav_toggle.click(function() {
		$(".top-navigation").toggleClass("active");
		$(".btn-hide-nav").toggleClass("hide-active");
	});
	/*show toggle navigation button*/


	var nav_hide = $(".btn-hide-nav");

	nav_hide.click(function() {
		$(".top-navigation").toggleClass("active");
		$(this).toggleClass("hide-active");
	});
	/*hide navigation*/


	var btn_login = $(".btn-sign-up");

	btn_login.click(function() {
		console.log("sign up");
	});


});