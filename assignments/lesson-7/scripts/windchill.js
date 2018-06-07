/*f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 
*/

var l= 66;
var h= 90;
var s= 5;
var w= windchill;  

//average of two temperatures

var t= ((h-l)/2) + l;

var w= (35.74) + (0.6215 * t) - 35.75 * (Math.pow (s,0.16)) + (0.4275 * t * (Math.pow (s,0.16)));
w= Math.round(w);

document.getElementById("windchill").innerHTML = w;