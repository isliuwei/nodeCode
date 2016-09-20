/**
 * Created by liuwei on 16/9/19.
 *
 * Node中的http模块提供了HTTP服务器和客户端接口:
 * var http = require("http");
 *
 * 创建HTTP服务器要调用 http.createServer() 函数.
 * 它只有一个参数,是个回调函数,服务器每次收到HTTP请求后都会调用这个回调函数.
 * 这个请求回调会接受到两个参数,请求(req)和响应(res).
 *
 * 服务器每收到一条HTTP请求,都会用新的req和res对象触发请求回调函数.
 * 在触发回调函数之前,Node会解析请求的HTTP头,并将它们作为req对象的一部分提供给请求回调.
 * 但Node不会在回调函数被触发之前开始对请求体的解析.
 * Node不自动让客户端写任何响应.再调用完请求回调函数之后,用 res.end() 方法结束响应.
 * 在响应结束之前,可以在请求的生命周期内运行任何异步逻辑.
 * 如果没有结束响应,请求会挂起,直到客户端超时,或者它会一直处于打开状态.
 *
 * HTTP客户端,比如web浏览器,发起一个HTTP请求 ---->  Node接受连接,以及发送给HTTP服务器的请求数据 ---->  HTTP服务器解析完HTTP头,将控制权转交给请求回调函数
 *  ----> 请求回调执行应用逻辑,发起响应 ----> 响应通过HTTP服务器送回去,由它为客户端构造格式正确的HTTP响应
 */

var http = require("http");

var server = http.createServer(function(req,res){


        res.write("Hello World!");
        res.end();


    /*
        var body = 'Hello World!';
        res.setHeader("Content-Length", body.length);
        res.setHeader("Conent-Type", 'text/plain');
        res.end(body);
    */

    /*
        var url = 'http://google.com';
        var body = '<p>Redirecting to <a href="' + url + '">' + url + '</a></p>';
        //res.setHeader("Location", url);
        res.setHeader("Content-Length", body.length);
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 302;
        res.end(body);
    */


});

server.listen(3000);
console.log("Web Server is listening port 3000!");




