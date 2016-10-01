/**
 *
 *  title:  ch14 mysql_query.js
 *  author: isliuwei
 *  time:   2016/09/28/23:54:21
 *  intro:  查询 MySQL 数据库
 *
 */

console.info("----------    mysql query    ----------");
console.info();

var http = require('http');
var mysql = require('mysql');

/**
 * 连接 MySQL 数据库配置
 */

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodejs',
    port: 3306
});



http.createServer(function(req,res){

    connection.query('SELECT * FROM t_admin',function(error,results,fields){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.write('<h3>测试 Node.js - MySQL 数据库查询操作!</h3>');
        res.end(JSON.stringify(results));
    });


}).listen(3000);

console.log("Now start HTTP server on port 3000...");


console.info();
console.info("----------    mysql query    ----------");


