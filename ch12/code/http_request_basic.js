/**
 *
 *  title:  ch12 http_request_basic.js
 *  author: isliuwei
 *  time:   2016/10/01/12:21:51
 *  intro:  编写一个简单的 HTTP 客户端
 *
 */

console.info("----------    http - create basic client    ----------");
console.info();

var http = require('http');

/**
 * 定义服务器参数字段
 */

var options = {
    hostname: 'localhost',              //定义服务器主机地址
    port: 3000,                         //定义服务器主机端口号
    path: '/',                          //定义服务器路径
    method: 'POST'                      //定义服务器访问方式
};

/**
 *
 * 通过 http.request() 方法
 * 由客户端向 HTTP 服务器发起请求
 * 用于创建 HTTP 客户端连接并向 HTTP 服务器发起请求
 * 第一个参数 options 为一个 JSON 数组对象,用于定义 HTTP 服务器主机地址、端口号、路径、请求访问方式、请求头已经身份验证等信息
 * 第二个参数 callbakc 用于定义一个回调函数,其包含一个 http.ClientResponse 实例类型参数
 *
 */

var req = http.request(options,function(res){
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADER: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log('BODY: ' + chunk);
    });
});

/**
 * 监听 request 对象的 'error' 事件
 */

req.on('error',function(e){
    console.log('problem with request: ' + e.message);
});

/**
 * write data to request body
 */

req.write('data\n');

/**
 * write end to request body
 */

req.end();



console.info();
console.info("----------    http - create basic client    ----------");




