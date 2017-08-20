
jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.size() == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

var element = document.getElementById('rollO');
var imad = document.getElementById('mLg');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 10;
    imad.style.marginLeft = marginLeft + 'px';
    if (marginLeft == 1000){
        marginLeft = -50;
    }
}
imad.onclick= function (){
    var interval = setInterval(moveRight,100);
element.innerHTML ='I am Rolling Out Here..!! <i style="font-size:17px;color:red"> Click to Stop Me!!</i>';
element.onclick=function () {
    clearInterval(interval);
    element.innerHTML ='Smart - stArt';
}
};

var list1 = document.getElementsByClassName('list1');
var maps = document.getElementsByClassName('map'), i;

for (var i = 0; i < maps.length; i ++) {
    maps[i].style.display = 'none';
}