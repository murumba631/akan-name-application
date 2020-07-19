var dd = parseInt(document.getElementById("day"))
var mm = parseInt(document.getElementById("month"))
var cc = parseInt(document.getElementById("century"))
var yy = parseint(document.getElementById("year"))

var result=(( ( cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7;
alert(result); 