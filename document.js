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
$('.ml6 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
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