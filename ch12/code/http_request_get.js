/**
 *
 *  title:  ch12 http_request_get.js
 *  author: isliuwei
 *  time:   2016/10/01/15:10:11
 *  intro:  发送和处理 GET 请求
 *
 */

console.info("----------    http - request client get    ----------");
console.info();

var http = require('http');

http.get("http://localhost:3000?signature=12345678&echostr=78787878&timestamp=168",function(res){
    console.log('STATUS_CODES: ' + res.statusCode);
    console.info();
    res.setEncoding('utf8');

    /**
     * 监听 data 事件处理函数
     */

    res.on('data',function(chunk){
        console.log('BODY: '+ chunk);
        console.info();
    });
    console.info();


}).on('error',function(e){
    console.log('Got error: ' + e.message);
    console.info();
});


