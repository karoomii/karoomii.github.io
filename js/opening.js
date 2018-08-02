$(function(){
	$('.button').click(function(){
		$('.desc-box').removeClass('fadeInUp');
		$('.img-overlay').removeClass('shrink-img');
		$('.half-section-overlay').addClass('overlay-open');
	});
	$('.desc-box .button').click(function(){
		setTimeout(function(){
			$('.content-section').load('about.html');
		}, 1000);
	});
	
	$('.half-section-overlay').removeClass('overlay-open');
});

$(document).ready(function(){
	var $imgoverlay = $('.img-overlay');
	var $desc = $('.desc-box');

	$imgoverlay.waypoint(function (direction) {
		if (direction == 'down') {
			$(this.element).addClass('shrink-img');
		} else {
			$(this.element).removeClass('shrink-img');
		}
	}, { offset: '100%'});

	
	$desc.waypoint(function (direction) {
	if (direction == 'down') {
		$(this.element).addClass('fadeInUp');
	} else {
		$(this.element).removeClass('fadeInUp');
	}
}, { offset: '100%'});
});