var http = require('http');
var mysql = require('mysql');
var work = require('./lib/timetrack');

/**
 * 连接 MySQL 数据库配置
 */

var db = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '',
    database:   'nodejs',
    port: 3306
});

/**
 * HTTP请求路由
 */

var server = http.createServer(function(req,res){
    switch(req.method){
        case 'POST':
            switch(req.url){
                case '/':
                    work.add(db,req,res);
                    break;
                case '/archive':
                    work.archive(db,req,res);
                    break;
                case '/delete':
                    work.delete(db,req,res);
                    break;
            }
            break;

        case 'GET':
            switch(req.url){
                case '/':
                    work.show(db,res);
                    break;
                case '/archived':
                    work.showArchived(db,res);
                    break;
            }
            break;
    }
});

server.listen(3000);
console.log("Web server is listening port 3000......");


