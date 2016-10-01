/**
 *
 *  title:  ch12 http_response_header.js
 *  author: isliuwei
 *  time:   2016/10/01/14:01:17
 *  intro:  设定和获取 HTTP 头文件
 *
 */

console.info("----------    http - response header    ----------");
console.info();

var http = require('http');

http.createServer(function(req,res){

    /**
     * 通过 res.setHeader()方法 设定 HTTP 文件头
     */

    res.setHeader("Content-Type","text/html");
    res.setHeader("Set-cookie",['name=liuwei','language=chinese']);

    /**
     * 通过 res.getHeader()方法 获取 HTTP 文件头
     */

    var contentType = res.getHeader('Content-Type');
    console.info(contentType);

    var setCookies = res.getHeader('Set-cookie');
    console.info(setCookies);

    /**
     * 通过 res.write() 方法写页面内容
     */

    res.write('<h3>Node.js ---- HTTP</h3>');
    res.write('<h3>Content-Type: ' + contentType + '</h3>');
    res.write('<h3>Set-cookie: ' + setCookies + '</h3>');

    res.end();





}).listen(3000);

console.info();
console.info("----------    http - response header    ----------");



