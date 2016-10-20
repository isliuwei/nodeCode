var express = require('express');
var http = require('http');
var path = require('path');




//使用Morgan做日志记录中间件
var logger = require('morgan');

var app = new express();

app.disable("x-powered-by");

// 告诉Express你的视图存在于一个名为views的文件夹中
app.set("views", path.resolve(__dirname, "views"));
// 告诉Express你将使用EJS模板引擎
app.set("view engine", "ejs");


//输出有颜色区分的日志,以便于开发调试
app.use(logger('dev'));


//使用express.static 加载静态资源
var publicPath = path.resolve(__dirname, "public"); // 使用Node的path模块设置public的路径
app.use(express.static(publicPath)); // 从publicPath目录发送静态文件



app.get('/',function(req,res){
    res.render('index',{title: 'Express'});
});












app.use(function(req,res){
    res.statusCode = 404;
    res.end('404 Not Found');
});

app.listen(3000);
console.log('webserver is started on port 3000...');



