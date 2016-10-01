/**
 *
 *  title:  ch14 mysql_pool.js
 *  author: isliuwei
 *  time:   2016/09/29/00:27:17
 *  intro:  操作 MySQL 数据库连接池
 *
 */

console.info("----------    mysql pool    ----------");
console.info();

var http = require('http');
var mysql = require('mysql');

/**
 * 连接 MySQL 数据库连接池配置
 */

//var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : '',
//    database : 'nodejs',
//    port: 3306
//});

var pool  = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodejs',
    port: 3306
});



http.createServer(function(req,res){

    pool.getConnection(function(err,connection){
        if(err){
            console.log('POOL ====>' + err);
            console.log();
        }

        var sql = 'select * from t_admin';
        connection.query(sql,function(error,results,fields){
            if(error){
                console.log(error);
                console.log();
            }

            console.log('SELECT ====>');

            for(var p in results){
                console.log(results[p]);
            }

            connection.release();
            res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
            res.write('<h3>测试 Node.js - MySQL 数据库连接池操作!</h3>');
            res.end("<pre>"+JSON.stringify(results)+"</pre>");
        });
    });




}).listen(3000);

console.log("Now start HTTP server on port 3000...");


console.info();
console.info("----------    mysql pool    ----------");


