/**
 *
 *  title:  ch03 async-series.js
 *  author: isliuwei
 *  time:   2016/10/03/16:41:29
 *  intro:  Async 串行流程控制
 *
 */

console.info("----------    Node.js 异步编程: Async series    ----------");
console.info();

var async = require('async');

async.series([
    function(callback){
        callback(null,'hello');
    },
    function(callback){
        callback(null,'async');
    },
    function(callback){
        callback(null,'series');
    }
],function(err,results){
    console.log(results);
});


async.series({
    one: function(callback){
        callback(null,'hello');
    },
    two: function(callback){
        callback(null,'async');
    },
    three: function(callback){
        callback(null,'series');
    }
},function(err,results){
    console.log(results);
});

console.info();
console.info("----------    Node.js 异步编程: Async series    ----------");
