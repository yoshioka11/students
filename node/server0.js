var http = require('http'),
    fs = require('fs');
var settings = require('./settings')
var server = http.createServer();
console.log(settings);
var msg;
server.on('request',function(req,res){
  fs.readFile(__dirname + 'public_html/hello.html','utf-8',function(err,data){
    if(err){
      res.writeHead(404,{'Content-Type':'text/plain'});
      res.write("Not Found!!");
      return res.end();
    }
  })
  switch (req.url){
    case '/about':
      msg = "about this page";
      break;
    case '/profile':
      msg = "about me";
      break;
    default:
      msg = "wrong page";
      break;
  }
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.write(msg);
  res.end();
});
server.listen(settings.port,settings.host);
console.log("server listening...");
