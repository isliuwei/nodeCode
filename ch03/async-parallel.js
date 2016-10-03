/**
 *
 *  title:  ch03 async-parallel.js
 *  author: isliuwei
 *  time:   2016/10/03/17:08:59
 *  intro:  Async 并行流程控制
 *
 */

console.info("----------    Node.js 异步编程: Async parallel    ----------");
console.info();

var async = require('async');


async.parallel([
    function(callback){
        setTimeout(function(){
            callback(null, "one");
        },2000);
    },
    function(callback){
        setTimeout(function(){
            callback(null, "two");
        },1000);
    }
],function(err,results){
    console.log(results);
});


console.info();
console.info("----------    Node.js 异步编程: Async parallel    ----------");
