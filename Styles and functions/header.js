$(document).ready(function(){
	$(window).scroll(function(){
		if( $(this).scrollTop() > 3){
			$('nav').addClass('scroll');
		} else {
			$('nav').removeClass('scroll');
		}
	});
});
