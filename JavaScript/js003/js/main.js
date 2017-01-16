//jsファイル

var user = {
  email: "test@gmail.com",
  score: 30,
  greet: function(name){
    console.log("hello," + name +"from" + this.email)
  }
}

user.greet("yoshio");
