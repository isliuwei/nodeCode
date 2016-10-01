/**
 *
 *  title:  ch15 mongodb_conn.js
 *  author: isliuwei
 *  time:   2016/09/29/08:04:33
 *  intro:  连接 MongoDB 数据库
 *
 */

console.info("----------    mongodb connection    ----------");
console.info();

var http = require('http');
var mongodb = require('mongodb');

/**
 * 创建数据库服务器连接
 */

var server = new mongodb.Server(
    'localhost',                    //主机地址
    27017,                          //端口号
    {
        auto_reconnect: true        //自动连接
    }
);

/**
 * 创建数据库连接
 */

var db = new mongodb.Db(
    'nodejs',               //数据库名称
    server,                 //数据库服务器
    {
        safe: true
    }
);

/**
 * 测试数据库连接
 */
/*
db.open(function(err,db){
    if(!err){
        console.log('log - connect mongodb success!');
    }else{
        console.log('log - ' + err);
    }
});
*/
/**
 * 创建 HTTP 服务器
 */

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    /**
     * 测试数据库连接
     */
    db.open(function(err,db){
        if(!err){
            res.write('<p>Connected MongoDB:Node.js success!</p>');
        }else{
            res.write('<p>Error Connected to MySQL!</p>');
            console.log('log - ' + err);
        }
        res.end("<h5>----- end operations -----</h5>");
    });

}).listen(3000);


console.log("Now start HTTP server on port 3000...");



