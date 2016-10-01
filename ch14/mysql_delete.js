/**
 *
 *  title:  ch14 mysql_delete.js
 *  author: isliuwei
 *  time:   2016/09/29/00:12:36
 *  intro:  删除 MySQL 数据库
 *
 */

console.info("----------    mysql delete    ----------");
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

    connection.query('DELETE FROM t_admin WHERE admin_id = 7',function(errordelete,resdelete){
        if(errordelete) console.log(errordelete);
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.write('<h3>测试 Node.js - MySQL 数据库删除操作!</h3>');
        res.write("<pre>DELETE Return ====></pre>");
        res.end("<pre>"+JSON.stringify(resdelete)+"</pre>");

    });


}).listen(3000);

console.log("Now start HTTP server on port 3000...");


console.info();
console.info("----------    mysql delete    ----------");


