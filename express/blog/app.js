var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    post = require('./routes/post');

app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.methodOverride());
app.use(logger('dev'));

//routing

app.get('/', post.index);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id', post.show);
app.get('/posts/:id/edit', post.edit);
app.put('/posts/:id/', post.update);
app.delete('/posts/:id/', post.destroy);

app.post('/create',function(req,res){
  res.send(req.body.name);
});

// app.get('/',function(req,res){
//   res.render('index',{title:'title'});
// });


app.listen(3000);
console.log("server starting....");
