/**
 *
 *  title:  ch12 http_request_statuscode.js
 *  author: isliuwei
 *  time:   2016/10/01/13:19:41
 *  intro:  HTTP 响应状态码
 *
 */

console.info("----------    http - request statusCode    ----------");
console.info();

var http = require('http');
var querystring = require('querystring');

/**
 * 定义响应状态码数组
 */

var statusCodes = new Array();
statusCodes[0] = "201";
statusCodes[1] = "202";
statusCodes[2] = "203";
statusCodes[3] = "401";
statusCodes[4] = "402";

/**
 * 定义查询字段
 */

var postData = new Array();
for(var i=0; i<5; i++){
    postData[i] = querystring.stringify({
        statusCodes: statusCodes[i]
    });
}

/**
 * 模拟 HTTP 客户端向 HTTP 服务器端连续发送 request 请求
 */

for(var j=0; j<5; j++){

    var options = {
        hostname: 'localhost',
        port: 3000,
        path: '/' + postData[j],
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
    };

    /**
     * 通过 http.request() 方法
     * 由客户端向 HTTP 服务器发送请求
     */

    var req = http.request(options,function(res){
        console.log('STATUS_CODES: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));

        console.info();

        res.setEncoding('utf8');
        res.on('data',function(chunk){
            console.log('BODY: ' + chunk);
            console.info();
        });

    });

    /**
     * 监听 request 对象的 error 事件
     */

    req.on('error',function(e){
        console.log('problem with request: ' + e.message);
        cosole.info();
    });

    /**
     * write data to request body
     */

    req.write('data\n');

    /**
     * write end to request body
     */

    req.end();









}






