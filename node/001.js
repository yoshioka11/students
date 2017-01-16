//console.log("hello world");

/* non blocking
setTimeout(function(){
  console.log("hello");
},1000);
console.log("wolrd");
*/

//blocking
var start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log("wolrd");
