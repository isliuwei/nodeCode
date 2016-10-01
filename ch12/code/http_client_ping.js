/**
 *
 *  title:  ch12 http_client_ping.js
 *  author: isliuwei
 *  time:   2016/10/01/20:00:36
 *  intro:  模拟 ping 命令连接服务器
 *
 */

console.info("----------    http - client ping    ----------");
console.info();

var http = require('http');

/**
 * 定义查询字段
 * @type {{host: string, port: number, path: string}}
 */
var options = {
    host: 'localhost',
    port: 6868,
    path: '/'
};

var ping_server = function (){
    /**
     * 发送 HTTP GET 请求
     */
    http.get(options,function(res){
        if(res.statusCode == 200){
            console.log('This site is up!');
        }else{
            console.log('This site is down!');
        }
    }).on('error',function(e){
        console.log('There was an error: ' + e.message);
    });
}

/**
 * 进行重定向操作
 * 通过 setInterval() 方法设定时间间隔
 */

setInterval(ping_server,1000);

console.info();
console.info("----------    http - client ping    ----------");
