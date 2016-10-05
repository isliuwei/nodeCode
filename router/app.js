var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');


var routes = require('./routes/index');
var web = require('./routes/web');


var app = new express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
var staticPath = path.join(__dirname,'static');
app.use(express.static(staticPath));


app.use('/', routes);
app.use('/web', web);



app.use(function(req, res){
    res.status(404).end('404');
});


app.use(function(err, req, res, next) {
    console.error(err);
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.send("Internal server error.");
});


/*
var https = require('https');
var fs = require('fs');

var httpsOptions = {
    key: fs.readFileSync("./pem/key.pem"),
    cret: fs.readFileSync("./pem/key-cert.pem")
};

https.createServer(httpsOptions, app).listen(6868);

*/

app.listen(3000,function(){
    console.log('Router started on port 3000......');
});

















