$(function(){
	$('.menu-button').on('click', function(){
		$('.dropDown').toggleClass('appear');
	});
});


$(function(){
	$(window).scroll(function(event){
		var target = $(this).scrollTop();

		if (target > 3){
			$('.headerWrapper').addClass('scrolling');
			$('.topLeft > img').addClass('scrolling');
			$('.topLeft h2').addClass('scrolling');
			$('.random img').addClass('scrolling');
			$('.random h3').addClass('scrolling');
			$('.dropDown').addClass('scrolling');
			$('header').addClass('scrolling');
			$('.topRight nav span').addClass('scrolling');
		} if (target == 0) {
			$('.headerWrapper').removeClass('scrolling');
			$('.topLeft > img').removeClass('scrolling');
			$('.topLeft h2').removeClass('scrolling');
			$('.random img').removeClass('scrolling');
			$('.random h3').removeClass('scrolling');
			$('.dropDown').removeClass('scrolling');
			$('header').removeClass('scrolling');
			$('.topRight nav span').removeClass('scrolling');
		}
	});
});