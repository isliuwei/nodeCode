/**
 *
 *  title:  ch12 http_createServer_pathname.js
 *  author: isliuwei
 *  time:   2016/10/01/16:54:38
 *  intro:  服务器多路径处理方式
 *
 */

console.info("----------    http - server pathname    ----------");
console.info();

var http = require('http');
var url = require('url');

http.createServer((req,res)=>{

    var pathname = url.parse(req.url).pathname;

    /**
     * Responding to multi type of request
     */

    switch(pathname){

        case '/':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.write('Node.js ---- HTTP\n');
            res.end('Home Page\n');
            break;

        case '/about':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.write('Node.js ---- HTTP\n');
            res.end('About Us Page\n');
            break;

        case '/redirect':
            res.writeHead(301,{'Location':'/'});
            res.write('Node.js ---- HTTP\n');
            res.end('About Us Page\n');
            break;

        default:
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.write('Node.js ---- HTTP\n');
            res.end('404 Page Not Found\n');

    }

}).listen(6868);


console.info();
console.info("----------    http - server pathname    ----------");
