//counter code
var button = document.getElementById('counter');
button.oncLick = function() {

//Create A Request To Counter Endpoint
var request = new XMLHttpRequest();
//Capture The Response And Store In HTML
request.onreadystatechange = function() {
if (request.readyState === XMLHttpRequest.DONE) 
{
//Take Some Action
if (request.status === 200) 
 { 
var counter= request.responseText; 
var span = document.getElementById('count');
span.innerHTML = counter.toString();
   }
  }
};
//Make A Request
request.open('GET', 'http://shubhamshekhar089.imad.hasura-app.io/counter', true);
request.send(null);
};
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
  //make the request to the server and send the name
  
  //capture a list of names and render it as a list
  var names = ['name1','name2','name3','name4'];
  var list = '';
  for(var i=0; i< names.length; i++){
      list += '<li>' + names[i] + '</li>' ;
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};