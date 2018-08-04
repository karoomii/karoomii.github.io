$(function(){
	$('#close-btn').css({
		'transform':'translate(0, 0) rotate(45deg)',
		'opacity':1
	});
	$('.section').css({
		'opacity':1,
	});
	$('#close-btn').click(function(){
		$('.section').css({
			'opacity':0,
		});
		$('.menu-section ol li').css('opacity',1);
		$('#close-btn').css({
			'transform':'translateY(40px) rotate(45deg)',
			'opacity':0
		});
		 setTimeout(function(){
				 $(".content-section").load("portfolio.html")  
			   }, 1000);
	});
});