var express = require('express');
var http = require('http');
var path = require('path');

//使用Morgan做日志记录中间件
var logger = require('morgan');

var app = new express();

//输出有颜色区分的日志,以便于开发调试
app.use(logger('dev'));


//使用express.static 加载静态资源
var publicPath = path.resolve(__dirname, "public"); // 使用Node的path模块设置public的路径
app.use(express.static(publicPath)); // 从publicPath目录发送静态文件


//路由配置
app.get('/',function(req,res){
    res.end('/');
});

app.get('/about',function(req,res){
    res.end('/about');
});

app.get("/hello/:who", function(req,res) {
    // req.params 有一个who属性
    res.end("Hello, " + req.params.who + ".");
    // 有趣的事实：我们这样做会有一些安全问题
});

app.use(function(req,res){
    res.statusCode = 404;
    res.end('404 Not Found');
});


console.log('webserver is started on port 3000...');

app.listen(3000);

