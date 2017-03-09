$(document).ready(function(){
	// $('.btn').on('hover', function(){
	// 	$('.btn').addClass('pulse');
	// })

	$( ".btn" ).hover(function() {
	  $( this ).addClass('pulse');
	});

	$("#smoothies").click(function() {
		$("#menu-area").removeClass();
		$("#menu-area").addClass("smoothies");
	});

	$("#hot-iced").click(function() {
		$("#menu-area").removeClass();
		$("#menu-area").addClass("hot-iced");
	});

	$("#blended").click(function() {
		$("#menu-area").removeClass();
		$("#menu-area").addClass("blended");
	});

	$("#beans").click(function() {
		$("#menu-area").removeClass();
		$("#menu-area").addClass("beans");
	});


});