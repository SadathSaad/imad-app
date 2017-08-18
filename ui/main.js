var element = document.getElementById('rollO');
element.innerHTML ='I am Rolling Out Here..!!';
var imad = document.getElementsByClassName('mLg');
var marginLt = 0;
function movRt (){
    marginLt = marginLt + 10;
    imad.style.marginLeft = marginLt + 'px';
}
imad.onclick= function (){
    var interval = setInterval(movRt,100);
}
