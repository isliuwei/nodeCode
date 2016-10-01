/**
 *
 *  title:  ch14 mysql_conn.js
 *  author: isliuwei
 *  time:   2016/09/28/20:43:41
 *  intro:  连接 MySQL 数据库
 *
 */

console.info("----------    mysql connection    ----------");
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

    res.writeHead(200,{'Content-Type':'text/html;charset = utf8'});
    res.write('<h3>测试 Node.js - MySQL 数据库连接!</h3>');

    connection.connect(function(err){
        if(err){
            res.end('<p>Error Connected to MySQL!</p>');
            return;
        }else{
            res.end('<p>Connected to MySQL success!</p>');
        }
    });


}).listen(3000);

console.log("Now start HTTP server on port 3000...");


console.info();
console.info("----------    mysql connection    ----------");


