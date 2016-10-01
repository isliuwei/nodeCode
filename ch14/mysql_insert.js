/**
 *
 *  title:  ch14 mysql_insert.js
 *  author: isliuwei
 *  time:   2016/09/28/23:54:21
 *  intro:  查询 MySQL 数据库
 *
 */

console.info("----------    mysql insert    ----------");
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

    connection.query('INSERT INTO t_admin(admin_name,admin_password) VALUES("liuwei","16220811")',function(errorinsert,resinsert){
        if(errorinsert) console.log(errorinsert);

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.write('<h3>测试 Node.js - MySQL 数据库插入操作!</h3>');
        res.write("<pre>INSERT Return ====></pre>");
        res.end("<pre>"+JSON.stringify(resinsert)+"</pre>");

    });


}).listen(3000);

console.log("Now start HTTP server on port 3000...");


console.info();
console.info("----------    mysql insert    ----------");


