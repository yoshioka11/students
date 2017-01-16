//jsファイル

/*組み込みオブジェクト
      -String
      -Array
      -Math●
      -Date●
*/
console.log(Math.PI);
console.log(Math.ceil(5.3));
console.log(Math.floor(5.3));
console.log(Math.round(5.3));
console.log(Math.random());
console.log(Math.floor(Math.random()*10));

var d = new Date();
//jsの場合月は0~11+1で計算する。1=2月
//var d = new Date(2014, 1, 11, 10 ,20 ,30);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getTime());
console.log(d);
