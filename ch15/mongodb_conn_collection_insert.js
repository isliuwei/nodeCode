/**
 *
 *  title:  ch15 mongodb_conn_collection_insert.js
 *  author: isliuwei
 *  time:   2016/09/29/11:13:07
 *  intro:  插入 MongoDB 数据集合
 *
 */

console.info("----------    mongodb connection collection insert    ----------");
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

var client = new mongodb.Db(
    'nodejs',               //数据库名称
    server,                 //数据库服务器
    {
        safe: true
    }
);

/**
 * 创建 HTTP 服务器
 * 测试数据库连接
 */

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    res.write("<h3>测试 Node.js - MongoDB 数据库操作!</h3>");

    /**
     * 测试数据库连接
     */
    client.open(function(err,mongodb){
        if(!err){
            res.write('<p>Connected MongoDB:Node.js success!</p>');

            /**
             * 连接数据库集合
             */

            mongodb.collection('userinfo',{safe: true},function(errcollection,collection){
                if(!errcollection) {
                    res.write('<p>Connected MongoDB:Node.js:userinfo success!</p>');

                    var insertCol = {userName: 'liuwei', password: '123456', addTime: new Date()};

                    collection.insert(insertCol, {safe: true}, function (errinsert, result) {
                        if (!errinsert) {
                            res.write('<p>collection.insert() is: </p>');
                            res.write(JSON.stringify(result));
                            console.log(result);
                            res.end("<h5>----- end operations -----</h5>");
                            client.close();
                        }
                    });
                }else{
                    console.log('log - ' + err);
                }
            });


        }else{
            res.write('<p>Error Connected to MySQL!</p>');
            console.log('log - ' + err);
            res.end("<h5>----- end operations -----</h5>");
            client.close();
        }

    });

}).listen(3000);


console.log("Now start HTTP server on port 3000...");




