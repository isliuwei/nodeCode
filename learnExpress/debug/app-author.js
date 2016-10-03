var express = require('express');
var http = require('http');

var app = new express();

app.use(function(req,res,next){
    console.log("In comes a request to: " + req.url);
    next();
});


app.use(function(req,res,next) {
    var minute = (new Date()).getMinutes();

    if ((minute % 2) === 0) {
        next();
    } else {
        // 如果没有通过验证，发送一个403的状态码并进行响应
        res.statusCode = 403;
        res.end("Not authorized.");
    }

});

app.use(function(req,res) {
    res.end('Secret info: the password is "isliuwei"!');
});

/*
    app.use(function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
        res.end("Hello, world!");
    });
*/


console.log('webserver is started on port 3000...');

app.listen(3000);

//http.createServer(app).listen(3000);