/*真偽値について
      文字列:空文字以外だったらtrue
      数値: 0かNaNだったらtrue
      true / false
      object: null以外だったらtrue
      undefinded,null ->false
*/
if(x){
  //処理
}
//空文字だったら↑と↓は一緒
if(x!==''){
  //処理
}

/*
      三項演算子
      var a,b,c;
      if(条件){
          a=b;
    }else{
          a=c;
  }
  と
  a = (条件) ? b:cは一緒
*/
