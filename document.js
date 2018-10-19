$(function(){
	$(window).scroll( function(){
		
		var top_of_window = $(window).scrollTop() /*+ $(window).height();*/
		//fade-in
		$('.fadeSwitch').each(function(){
			var top_of_object = $(this).position().top + $(this).outerHeight();
			 if( top_of_window > top_of_object ){
				$('.fade-ani').addClass('showing');
			}
			else{
				$('.fade-ani').removeClass('showing');
			}
		});

	});
});
/*$(function(){
	$(window).scroll( function(){
		
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		//fade-in
		$('.fade-ani').each(function(){
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			 if( bottom_of_window > bottom_of_object ){
				$(this).addClass('showing');
			}
			else{
				$(this).removeClass('showing');
			}
		});

	});
});*/