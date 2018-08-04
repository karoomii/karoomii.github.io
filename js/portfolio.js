//$(document).ready(function(){
//var $projectwrap = $('.project-wrap');
//
//$projectwrap.waypoint(function (direction) {
//	if (direction == 'down') {
//		$(this.element).css('opacity',1);
//	} else {
//		$(this.element).css('opacity',0.2);
//	}
//}, { offset: '60%'});
//	
//$projectwrap.waypoint(function (direction) {
//	if (direction == 'up') {
//		$(this.element).css('opacity',1);
//	} else {
//		$(this.element).css('opacity',0.2);
//	}
//}, { offset: '0%'});
//});





$(function(){
	$('.footer-overlay').removeClass('overlay-open');
	$('.project-wrap').addClass('fadeInUp');
});




/*FREEZING FRAME TESTING AREA*/
$(function(){
	$('.desc-box .button').click(function(){
		$('.project-wrap').removeClass('fadeInUp');
		$('.footer-overlay').addClass('overlay-open');
		$('.menu-section ol li').css('opacity',0);
		setTimeout(function(){
			 $(".menu-section ol li").css('display','none');  
		  }, 1000);
	});
	
	$('.section:nth-child(1) .button').click(function(){
	setTimeout(function(){
				 $(".content-section").load("bona.html");  
			   }, 1000);
	});
	$('.section:nth-child(2) .button').click(function(){
	setTimeout(function(){
				 $(".content-section").load("sweeterman.html");  
			   }, 1000);
	});
	$('.section:nth-child(3) .button').click(function(){
	setTimeout(function(){
				 $(".content-section").load("peak.html");  
			   }, 1000);
	});
	$('.section:nth-child(4) .button').click(function(){
	setTimeout(function(){
				 $(".content-section").load("trap.html");  
			   }, 1000);
	});
	$('.section:nth-child(5) .button').click(function(){
	setTimeout(function(){
				 $(".content-section").load("fp.html");  
			   }, 1000);
	});
	
});