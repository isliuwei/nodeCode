var express = require('express');
var path = require('path');
var fs = require('fs');

var app = new express();


//日志中间件
/*
app.use((req,res,next)=>{
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next(); //这行很重要
});
*/

//使用Morgan 日志中间件
var logger = require('morgan');
app.use(logger('dev'));



/**
 *
 *  静态文件服务中间件
 *  1.检查请求的文件是否存在于目录中.
 *  2.如果文件存在,响应这个文件并结束其余工作.从代码的角度来说，它调用了res.sendFile.
 *  3.如果文件不存在,继续下一个中间件栈中的中间件.从代码的角度来说，它调用了next.
 *
 */

//添加一个静态文件中间件到中间件栈

/*
app.use((req,res,next)=>{
    // 使用path.join来寻找文件的真实路径
    var filePath = path.join(__dirname,'public',req.url);
    // 内置的fs.stat获取文件信息
    fs.stat(filePath,(err,fileInfo)=>{
        // 如果fs.stat错误，继续到下一个中间件
        if(err){
            next();
            return;
        }else{
            // 如果文件存在则调用res.sendFile
            if(fileInfo.isFile()){
                res.sendFile(filePath);
            }else{
                // 不存在则调用下一个中间件
                next();
            }
        }
    });
});
*/


//替换为Express的内置静态文件中间件
//只有一个中间件是Express内置的,它就是express.static.
//express.static也是一个返回中间件的函数.它传入一个参数:你想要提供静态文件的文件夹目录.

var publicPath = path.join(__dirname,'public'); // 设置静态文件的路径
app.use(express.static(publicPath));    // 使用express.static从静态路径提供服务




// 渲染404页面，因为你请求了未知资源

app.use((req,res)=>{
    res.status(404).end('404 file not found!');
});


//编写并使用中错误处理中间件：一个带有4个参数的函数
// 类似其它的中间件，不过它增加了已给参数
// 记录所有错误的中间件

app.use(function(err, req, res, next) {
    // 记录错误
    console.error(err);
    // 继续到下一个错误处理中间件
    next(err);
});

// 确保你指定了四个参数
app.use(function(err, req, res, next) {
    // 设置状态码为500
    res.status(500);
    // 发送错误信息
    res.send("Internal server error.");
});





app.listen(3000,()=>{
    console.log('App started on port 3000......');
});