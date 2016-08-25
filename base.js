$(document).ready(function() {
	/*var windowHeight = $(window).height();
	//console.log(windowHeight);
	$('.page-body').css('height', windowHeight - 50 + 'px');
	
	$(window).resize(function() {
		var windowHeight = $(window).height();
		//console.log(windowHeight);
		$('.page-body').css('height', windowHeight - 50 + 'px');
	});*/
	
	$(window).on('load', function() {
		$('.loader').css('display', 'none');
	});
	
	$('.menu-slide-icon').click(function() {
		$(this).parent('.fluid-menu').toggleClass('active');
	});
	
	/*$('body').click(function() {
		if ($('.fluid-menu').hasClass('active')){
            $('.fluid-menu').removeClass('active');
        }
	});*/
	
	$('.menu-list-group-item').click(function() {
		$('.fluid-menu').removeClass('active');       
	});
	
	$('.hasDropdown').hover(function() {
		$(this).find('.newDropdown:first').fadeIn();
	}, function() {
		$('.newDropdown').fadeOut();
	});
	
	$(document).click(function(event) { 
	    if(!$(event.target).closest('.fluid-menu').length &&
	       !$(event.target).is('.fluid-menu')) {
	        if($('.fluid-menu').hasClass('active')) {
	            $('.fluid-menu').removeClass('active');
	        }
	    }        
	});
	
});