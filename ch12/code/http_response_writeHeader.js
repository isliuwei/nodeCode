/**
 *
 *  title:  ch12 http_response_writeHeader.js
 *  author: isliuwei
 *  time:   2016/10/01/14:28:49
 *  intro:  写 HTTP 头文件的方法
 *
 */

console.info("----------    http - server write header    ----------");
console.info();

var http = require('http');
http.createServer(function(req,res){

    /**
     * 通过 res.writeHead() 方法写 HTTP 头
     */

    var body = 'write header';

    res.writeHead(200,{
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(body)
    });

    /**
     * 通过 res.write() 方法写 内容
     */

    res.write('Node.js');
    res.write('HTTP');

    res.end();




}).listen(3000);


console.info();
console.info("----------    http - server write header    ----------");
