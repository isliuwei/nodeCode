/**
 *
 *  title:  ch03 async-parallelLimit.js
 *  author: isliuwei
 *  time:   2016/10/03/17:17:54
 *  intro:  Async 限制性并行流程控制
 *
 */

console.info("----------    Node.js 异步编程: Async parallelLimit    ----------");
console.info();

var async = require('async');

async.parallelLimit([
        function(callback){
            setTimeout(function(){
                callback(null, "one");
            },1000);
        },
        function(callback){
            setTimeout(function(){
                callback(null, "two");
            },1000);
        }
    ],
    1,
    function(err,results){
        console.log(results);
});




console.info();
console.info("----------    Node.js 异步编程: Async parallelLimit    ----------");
