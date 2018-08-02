$(document).ready(function(){
var $projectwrap = $('.project-wrap');

$projectwrap.waypoint(function (direction) {
	if (direction == 'down') {
		$(this.element).css('opacity',1);
	} else {
		$(this.element).css('opacity',0.2);
	}
}, { offset: '50%'});
	
$projectwrap.waypoint(function (direction) {
	if (direction == 'up') {
		$(this.element).css('opacity',1);
	} else {
		$(this.element).css('opacity',0.2);
	}
}, { offset: '0%'});
});

$(function(){
	$('.project-wrap').css({
		'transform':'translateY(0)',
		'opacity':0.2
	});
	$('.half-section-overlay').removeClass('overlay-open');
	$('.menu-section ol li, .button, #menu-logo').click(function(){
		$('.project-wrap').css({
		'transform':'translateY(20%)',
		'opacity':0
	});
	});
});