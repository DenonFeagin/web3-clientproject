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
	          $(".navbar-default").css('background-color', '#fff');
	       } else {
	          $('.navbar-default').css('background-color', 'transparent');
	       }

	       if(scroll_start > offset.top) {
	          $(".navbar-default li").css('border-color', '#000');
	       } else {
	          $('.navbar-default li').css('border-color', '#fff');
	       }

	       if(scroll_start > offset.top) {
	          $(".navbar-default a").css('color', '#000');
	       } else {
	          $('.navbar-default a').css('color', '#fff');
	       }
	   });
	    }

	$( ".btn" ).hover(function() {
	  $( this ).addClass('pulse');
	});

	$("#menu-area").addClass("smoothies");

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