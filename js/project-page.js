$(function(){
	$('#close-btn').css({
		'transform':'translate(0, 0) rotate(45deg)',
		'opacity':1
	});
	$('.project-section').css({
		'opacity':1,
	});
	$('.footer-overlay').removeClass('overlay-open');
	
	
	$('#close-btn').click(function(){
		$('.project-section').css({
			'opacity':0,
		});
		$('#close-btn').css({
			'transform':'translateY(40px) rotate(45deg)',
			'opacity':0
		});
		$('.footer-overlay').addClass('overlay-open');
		 setTimeout(function(){
				 $(".content-section").load("portfolio.html");  
			   }, 1000);
		$('.menu-section ol li').css('display','inline-block');
		setTimeout(function(){
			 $(".menu-section ol li").css('opacity',1);  
		  }, 1000);
	});
	
	
	$('#menu-logo').click(function(){
		$('.project-section').css({
			'opacity':0,
		});
		$('#close-btn').css({
			'transform':'translateY(40px) rotate(45deg)',
			'opacity':0
		});
		$('.footer-overlay').addClass('overlay-open');
		setTimeout(function(){
				 $(".content-section").load("opening.html");  
			   }, 1000);
		$('.menu-section ol li').css('display','inline-block');
		setTimeout(function(){
			 $(".menu-section ol li").css('opacity',1);  
		  }, 1000);
	});
});
	
	
	
	
	$('video').each(function(){
    if ($(this).is(":in-viewport")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
});