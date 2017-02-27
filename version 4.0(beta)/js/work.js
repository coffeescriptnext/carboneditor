window.onload = function(){

var xp = new Audio();
xp.src= "xp.mp3";
xp.play();

var display = document.getElementById("display");

var htmlButton = document.getElementById("htmlBtn");
var cssButton = document.getElementById("cssBtn");
var jsButton = document.getElementById("jsBtn");
var run = document.getElementById("run");

htmlButton.addEventListener("click", showHtml);
cssButton.addEventListener("click", showCss);
jsButton.addEventListener("click", showJs);

run.addEventListener("click", displayCode);
document.onkeydown = keyHandler;

function keyHandler(e){
  
  var key = e.keyCode;
  //alert(key);
  
  if(e.shiftKey && e.ctrlKey && key === 49){
    showHtml();
  }
  else if(e.shiftKey && e.ctrlKey && key === 50){
    showCss();
  }
  else if(e.shiftKey && e.ctrlKey && key === 51){
    showJs();
  }
  
}

function displayCode(){
  //alert("click");
  //var code = document.getElementById("code").value;
  /*var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var runBtn = document.getElementById("run");
  */
  runBtn.className += "active";
  htmlButton.className -= "active";
  jsButton.className -= "active";
  cssButton.className -= "active";
}

function showHtml(){
  run.className -= "active";
  htmlButton.className = "active";
  jsButton.className -= "active";
  cssButton.className -= "active";
  
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  
  css.style.display = "none";
  js.style.display = "none";
  html.style.display = "block";
  
}

function showCss(){
  
  run.className -= "active";
  htmlButton.className -= "active";
  jsButton.className -= "active";
  cssButton.className = "active";
  
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  
  html.style.display = "none";
  js.style.display = "none";
  css.style.display = "block";
  
}

function showJs(){
  
  run.className -= "active";
  htmlButton.className -= "active";
  jsButton.className = "active";
  cssButton.className -= "active";
  
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  
  css.style.display = "none";
  html.style.display = "none";
  js.style.display = "block";
  
}

}
