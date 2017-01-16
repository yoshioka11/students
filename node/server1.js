var http = require('http'),
    fs = require('fs');
var settings = require('./settings')
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs','utf-8');

server.on('request',function(req,res){
  fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data){
    if(err){
      res.writeHead(404,{'Content-Type':'text/plain'});
      res.write("Not Found!!");
      return res.end();
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
});
server.listen(settings.port,settings.host);
console.log("server listening...");
