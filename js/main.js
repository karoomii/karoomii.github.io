//SMOOTH SCROLLING//

var $imgoverlay = $('#me-overlay');
var $imgoverlay2 = $('#services-overlay');

$imgoverlay.waypoint(function (direction) {
	if (direction == 'down') {
		$imgoverlay.addClass('shrink-img');
	} else {
		$imgoverlay.removeClass('shrink-img');
	}
}, { offset: '100%'});

//$imgoverlay.waypoint(function (direction) {
//	if (direction == 'up') {
//		$imgoverlay.addClass('shrink-img');
//	} else {
//		$imgoverlay.removeClass('shrink-img');
//	}
//}, { offset: '-70%'});

$imgoverlay2.waypoint(function (direction) {
	if (direction == 'down') {
		$imgoverlay2.addClass('shrink-img');
	} else {
		$imgoverlay2.removeClass('shrink-img');
	}
}, { offset: '100%'});

//$imgoverlay2.waypoint(function (direction) {
//	if (direction == 'up') {
//		$imgoverlay2.addClass('shrink-img');
//	} else {
//		$imgoverlay2.removeClass('shrink-img');
//	}
//}, { offset: '0%'});

//SMOOTH SCROLLING//