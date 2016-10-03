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

//var EVIL_IP = "123.45.67.89";
// req.ip
/*
var EVIL_IP = "::1";
app.use(function(req, res, next) {
    if (req.ip === EVIL_IP) {
        res.status(401).send("Not allowed!");
    } else {
        next();
    }
});
*/


app.get('/',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write(req.ip);
    res.end("<h1>learnExpress</h1>");
});


/*扩展 request和response*/

//response.redirect
app.get('/redirect',function(req,res){
    res.redirect('http://www.baidu.com');
});


//response.sendFile
app.get('/download/:fileName',function(req,res){

    var downloadPath = "";
    var fileName = req.params.fileName;

    if(fileName == ""){
        downloadPath = publicPath+'/images/nodejs-green.png';  //    /Users/liuwei/Desktop/nodeCode/learnExpress/public/images/nodejs-green.png
    }else{
        downloadPath = publicPath+'/images/'+fileName;
    }

    res.sendFile(downloadPath);

});






/*
app.use(function(req,res){
    if(req.url = '/redirect'){
        res.writeHead(302,{'Location': 'http://www.baidu.com'});
        console.log('redirect');
        res.end('redirect');
    }

});

http.createServer(app).listen(3000);
*/


app.use(function(req,res){
    res.statusCode = 404;
    res.end('404 Not Found');
});

app.listen(3000);
console.log('webserver is started on port 3000...');



