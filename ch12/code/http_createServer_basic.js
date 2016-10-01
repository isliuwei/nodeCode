/**
 *
 *  title:  ch12 http_createServer_basic.js
 *  author: isliuwei
 *  time:   2016/10/01/10:28:11
 *  intro:  构建一个基本的 HTTP 服务器
 *
 */

console.info("----------    http - create basic server    ----------");
console.info();

var http = require('http');


/**
 * 调用 http.createServer() 方法创建服务器
 */

http.createServer(function(req,res){

    /*通过 res.writeHead() 方法写 HTTP 文件头*/

    res.writeHead(200,{'Content-Type': 'text/html;charset=utf8'});

    /*通过 res.write() 方法写页面内容*/

    res.write('<h3>Node.js ---- HTTP</h3>');

    /*通过 res.end() 方法发送响应状态码,并通知服务器消息完成*/

    res.end('<p>Create Basic HTTP Server!</p>');

}).listen(3000);

console.info();
console.info("----------    http - create basic server    ----------");

