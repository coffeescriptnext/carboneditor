


var at = "HTML";

document.getElementById("hdr").innerHTML = "Carbon Code Playground " + at;

var htmlarea = document.getElementById("HTML");
var cssarea = document.getElementById("CSS");
var jsarea = document.getElementById("JS");


window.onkeydown = function(e){
  
  var key = e.keyCode;
  
  if( e.ctrlKey && e.shiftKey && key === 50){
    showCss();
  }
  else if( e.ctrlKey && e.shiftKey && key === 49){
    showHtml();
  }
  else if(e.ctrlKey && e.shiftKey && key === 51){
    showJs();
  }
};

function showHtml(){
    at = "HTML";
    document.getElementById("hdr").innerHTML = "Carbon Code Playground " + at;
    htmlarea.style.display = "inline-block";
    jsarea.style.display = "none";
    cssarea.style.display = "none";
  }



function showCss(){
    at = "CSS";
    document.getElementById("hdr").innerHTML = "Carbon Code Playground " + at;
    htmlarea.style.display = "none";
    jsarea.style.display = "none";
    cssarea.style.display = "inline-block";
  }

function showJs(){
    at = "JS";
    document.getElementById("hdr").innerHTML = "Carbon Code Playground " + at;
    htmlarea.style.display = "none";
    jsarea.style.display = "inline-block";
    cssarea.style.display = "none";
  }




document.getElementById("save").addEventListener("click",saveTextAsFile);
document.getElementById("loadFile").addEventListener("click", loadFileAsText);




function saveTextAsFile()
{
  var name = prompt("Name Your File");
	var textToWrite = document.getElementById("code").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = name;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById(at).value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}