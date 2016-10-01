/**
 *
 *  title:  ch12 http_createServer_redirectA.js
 *  author: isliuwei
 *  time:   2016/10/01/16:25:07
 *  intro:  进行重定向操作
 *
 */

console.info("----------    http - create redirect server    ----------");
console.info();



var http = require('http');

http.createServer(function(req,res){

    /**
     * 通过 res.writeHead() 方法 实现重定向 将通过控制 HTTP 头文件实现从一个服务器页面跳转到另一个服务器页面的功能 301
     */

    res.writeHead(301,{//永久重定向
        'Location':'localhost:8686/'
    });


    res.writeHead(302,{//临时重定向
        'Location':'http://www.baidu.com/'
    });

    res.write('<h3>Node.js ---- HTTP</h3>');

    res.end('<p>Create Redirect HTTP Server on Port 6868!</p>');




}).listen(6868);
