/**
 *
 *  title:  ch12 http_createServer_redirectB.js
 *  author: isliuwei
 *  time:   2016/10/01/16:25:07
 *  intro:  进行重定向操作
 *
 */

console.info("----------    http - create redirect server    ----------");
console.info();

var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h3>Node.js ---- HTTP</h3>');
    res.end('<p>Create Redirect HTTP Server on Port 8686!</p>');

}).listen(8686);


console.info();
console.info("----------    http - create redirect server    ----------");

