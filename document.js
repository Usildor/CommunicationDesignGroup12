$(function(){
	$(window).scroll( function(){

		var top_of_window = $(window).scrollTop() /*+ $(window).height();*/
		//fade-in
		$('.fadeSwitch').each(function(){
			var top_of_object = 0.3*$(this).position().top + 0.3*$(this).outerHeight();
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



var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


//slideshow

var slideIndex, slide, dots, captionText;
function initGallery(){
	slideIndex=0;
	slides=document.getElementsByClassName("imageHolder");
	slides[slideIndex].style.opacity=1;

	captionText=document.querySelector(".captionHolder .captionText");
	captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

	dots=[];
	var dotsContainer=document.getElementById("dotsContainer");

	for(var i=0;i<slides.length;i++) {
		var dot=document.createElement("span");
		dot.classList.add("dots");
		dot.setAttribute("onClick","moveSlide("+i+")");
		dotsContainer.append(dot);
		dots.push(dot);
	}
dots[slideIndex].classList.add("active");

}
initGallery();
function plusSlides(n) {
	moveSlide(slideIndex+n);
}

function moveSlide(n) {
	var i,current,next;
	var moveSlideAnimClass={
		forCurrent:"",
		forNext:""
	}
	var slideTextAnimClass;
	if(n>slideIndex) {
		if(n>=slides.length){n=0}
		moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
		moveSlideAnimClass.forNext="moveLeftNextSlide";
		slideTextAnimClass="slideTextFromTop";
	}else if(n<slideIndex){
		if(n<0) {n=slides.length-1}
		moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
		moveSlideAnimClass.forNext="moveRightNextSlide";
		slideTextAnimClass="slideTextFromBottom";
	}
	if(n!=slideIndex){
		next=slides[n];
		current=slides[slideIndex];
		for(i=0;i<slides.length;i++){
			slides[i].className="imageHolder";
			slides[i].style.opacity=0;
			dots[i].classList.remove("active");
		}
		current.classList.add(moveSlideAnimClass.forCurrent);
		next.classList.add(moveSlideAnimClass.forNext);
		dots[n].classList.add("active");
		slideIndex=n;
	}
	captionText.style.display="none";
	captionText.className="captionText "+slideTextAnimClass;
	captionText.innerText=slides[n].querySelector(".captionText").innerText;
	captionText.style.display="block";
}
var timer=null;
function setTimer() {
	timer=setInterval(function () {
		plusSlides(1);
	},3000)
}
setTimer();

function playPauseSlides() {
	var playPauseBtn=document.getElementById("playPauseBtn");
	if(timer==null) {
		setTimer();
		playPauseBtn.style.backgroundPositionY="0px";
	}else{
		clearInterval(timer);
		timer=null;
		playPauseBtn.style.backgroundPositionY="-33px";
	}
}

// JavaScript Document

$('#show').click(function()
{
	$('#show').css('display','none');
	$('#data').show();
	$('#hide').show();
});

$('#hide').click(function()
{
	$('#hide').css('display','none');
	$('#data').hide();
	$('#show').show();
});

//button 2
$('#show2').click(function()
{
	$('#show2').css('display','none');
	$('#data2').show();
	$('#hide2').show();
});

$('#hide2').click(function()
{
	$('#hide2').css('display','none');
	$('#data2').hide();
	$('#show2').show();
})
