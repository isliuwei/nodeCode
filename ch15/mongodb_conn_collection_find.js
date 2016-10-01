/**
 *
 *  title:  ch15 mongodb_conn_collection_find.js
 *  author: isliuwei
 *  time:   2016/09/29/09:02:51
 *  intro:  查询 MongoDB 数据集合
 *
 */

console.info("----------    mongodb connection collection find    ----------");
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
                if(!errcollection){
                    res.write('<p>Connected MongoDB:Node.js:userinfo success!</p>');

                    /**
                     * 查询数据库集合,方式一  find().toArray
                     */
                    collection.find().toArray(function(errorfind,cols){
                        if(!errorfind){
                            res.write('<p>collection.find() is:</p>');
                            res.write(JSON.stringify(cols));
                            console.log(cols);
                            //res.end("<h5>----- end operations -----</h5>");
                            client.close();
                        }
                    });

                    /**
                     * 查询数据库集合,方式二  find({}).toArray
                     */
                    collection.find({userName:'isliuwei'}).toArray(function(errfind,cols){
                        if(!errfind){
                            res.write('<p>collection.find({}) is:</p>');
                            res.write(JSON.stringify(cols));
                            console.log(cols);
                            //res.end("<h5>----- end operations -----</h5>");
                            client.close();
                        }
                    });

                    /**
                     * 查询数据库集合,方式二  findOne({}).toArray
                     */
                    collection.findOne({userName:'liuwei'},function(errfind,col){
                        if(!errfind){
                            res.write('<p>collection.findOne({}) is:</p>');
                            res.write(JSON.stringify(col));
                            console.log(col);
                            res.end("<h5>----- end operations -----</h5>");
                            client.close();
                        }
                    });
                    //client.close();
                    //res.end("<h5>----- end operations -----</h5>");

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




