/**
 *
 *  title:  ch14 mysql_update.js
 *  author: isliuwei
 *  time:   2016/09/29/00:19:36
 *  intro:  更新 MySQL 数据库
 *
 */

console.info("----------    mysql update    ----------");
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

    connection.query('UPDATE t_admin SET admin_password = "lisi" WHERE admin_id = 8',function(errorupdate,resupdate){
        if(errorupdate) console.log(errorupdate);
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.write('<h3>测试 Node.js - MySQL 数据库更新操作!</h3>');
        res.write("<pre>DELETE Return ====></pre>");
        res.end("<pre>"+JSON.stringify(resupdate)+"</pre>");

    });


}).listen(3000);

console.log("Now start HTTP server on port 3000...");


console.info();
console.info("----------    mysql update    ----------");


