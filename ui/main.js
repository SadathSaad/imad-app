
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

var list1 = document.getElementById('l1');
var maps = document.getElementsByClassName('map'), i;
var list2 = document.getElementById('l2');
var cds = document.getElementsByClassName('cd'), i;

var clk = document.getElementById('counter');
clk.onclick = function (){
    var request=new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) 
            if (request.status === 200) {
               
                var counter = request.responseText;
                document.getElementById('count').innerHTML = counter.toString();
    clk.innerHTML=('Liked');
    $(clk).attr('disabled',true);$(clk).css({'background':'black'});
            }
        };
};
    request.open('GET', '/counter',true);
    request.send(null);


