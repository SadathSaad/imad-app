
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
var list1 = document.getElementById('l1');
var maps = document.getElementsByClassName('map'), i;
var list2 = document.getElementById('l2');
var cds = document.getElementsByClassName('cd'), i;
list1.onclick=function () {
for (var i = 0; i < cds.length; i ++) {
    cds[i].style.display = 'inline-block';
}
    for (var j = 0; j < maps.length; j ++) {
    maps[j].style.display = 'none';}
};
list2.onclick=function () {
for (var i = 0; i < cds.length; i ++) {
    cds[i].style.display = 'none';
}
    for (var j = 0; j < maps.length; j ++) {
    maps[j].style.display = 'table-cell';
}};

var clk = document.getElementById('counter');
clk.onclick = function (){
    var request=new XMLhttpRequest();
    Request.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var counter = request.responseText;
                document.getElementById('count').innerHTML = counter.toString();
    clk.innerHTML=('Liked');
    $(clk).attr('disabled',true);$(clk).css({'background':'black'});
            }
        }
};
    request.open('GET', '/counter');
    request.send();
}