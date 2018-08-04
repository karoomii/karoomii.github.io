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
//	$('.project-wrap').css({
//		'transform':'translateY(-50%)',
//		'opacity':0.2
//	});
	$('.project-wrap').addClass('fadeInUp');
//	$('.menu-section ol li, .desc-box .button, #menu-logo').click(function(){
//		$('.project-wrap').css({
//		'transform':'translateY(-30%)',
//		'opacity':0
//		});
//});
});




/*FREEZING FRAME TESTING AREA*/
$(function(){
	$('.section:nth-child(2) .button').click(function(){
		 setTimeout(function(){
				 $(".content-section").load("bona.html")  
			   }, 1000);
		$('.menu-section ol li').css('opacity',0);
	});
});