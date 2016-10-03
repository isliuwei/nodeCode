/**
 *
 *  title:  ch03 async-waterfall.js
 *  author: isliuwei
 *  time:   2016/10/03/16:56:28
 *  intro:  Async 瀑布模式流程控制
 *
 */

console.info("----------    Node.js 异步编程: Async waterfall    ----------");
console.info();

var async = require('async');

async.waterfall([
    function(callback){
        callback(null,1);
    },
    function(data,callback){
        console.info(data);
        //当回调函数的第一个参数为非空值时,waterfall会停止执行剩余的任务
        //第三个函数将不执行
        callback("pause",2);
    },
    function(data,callback){
        console.info(data);
        callback(null,3);
    },
],function(err,results){
    console.log(results);
});

console.log("1.需要注意的是 waterfall() 函数的tasks参数只能是数组类型。 2.当回调函数的第一个参数为非空值是,waterfall会停止执行剩余任务。");

console.info();
console.info("----------    Node.js 异步编程: Async waterfall    ----------");
