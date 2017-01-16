//jsファイル

/*組み込みオブジェクト
      -String
      -Array●
      -Math
      -Date
*/
var a = new Array(100,300,200);

console.log(a.length);
// unsift-> array <- push
// shift <- array ->pop
a.push(500);
console.log(a);
a.splice(1,2,800,1000);
console.log(a);
