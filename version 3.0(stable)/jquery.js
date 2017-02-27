$(function(){
  $("body").fadeIn(3000);
  
  var beforecss = "<!DOCTYPE html><html><head><title>HTML Tutorial</title><style> ";
  var aftercss =  "</style></head><body> ";
  var afterhtml = "<script> ";
  var afterjs = " </script></body></html>";
  
  var code = $(".code");

  code.on("keyup",function(){
    var codeHTML = $("#HTML").val();
    var codeCSS = $("#CSS").val();
    var codeJS = $("#JS").val();
    
    $("#display").html(beforecss+codeCSS+aftercss+codeHTML+afterhtml+codeJS+afterjs);
    
  });
  
  
  
  
  
  
  
  /*var button = $("#btn");

  button.on("click",function(){
    var code = $("#code").val();
    $("#display").html(code);
    
  });*/
  
  
});