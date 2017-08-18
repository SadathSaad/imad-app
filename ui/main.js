var element = document.getElementById('rollO');
element.innerHTML ='I am Rolling Out Here..!!';
var imad = document.getElementById('mLg');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 10;
    imad.style.marginLeft = marginLeft + 'px';
}
imad.onclick= function (){
    var interval = setInterval(moveRight,100);
}
