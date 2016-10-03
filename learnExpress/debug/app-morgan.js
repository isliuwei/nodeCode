var express = require('express');
var http = require('http');

//使用Morgan做日志记录中间件
var logger = require('morgan');

var app = new express();

//输出有颜色区分的日志,以便于开发调试
app.use(logger('dev'));

app.use(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
    res.end("Hello, world!");
});



console.log('webserver is started on port 3000...');

app.listen(3000);

//http.createServer(app).listen(3000);