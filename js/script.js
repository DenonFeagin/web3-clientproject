$(document).ready(function(){
	// $('.btn').on('hover', function(){
	// 	$('.btn').addClass('pulse');
	// })

	var scroll_start = 0;
	   var startchange = $('#startchange');
	   var offset = startchange.offset();
	    if (startchange.length){
	   $(document).scroll(function() { 
	      scroll_start = $(this).scrollTop();
	      if(scroll_start > offset.top) {
	          $(".navbar-default").css('background-color', '#000000');
	       } else {
	          $('.navbar-default').css('background-color', 'transparent');
	       }
	   });
	    }

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