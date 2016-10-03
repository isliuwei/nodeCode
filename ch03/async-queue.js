/**
 *
 *  title:  ch03 async-queue.js
 *  author: isliuwei
 *  time:   2016/10/03/17:37:07
 *  intro:  Async 队列流程控制
 *
 */

console.info("----------    Node.js 异步编程: Async queue    ----------");
console.info();

var async = require('async');

var q = async.queue(function(task, callback){
    console.log('worker is processing task: ', task.name);
    callback();
});

q.push({name: 'foo'},function(err){
    console.log('finished processing foo');
    console.info();
});

q.push({name: 'baz'},function(err){
    console.log('finished processing baz');
    console.info();
});

q.push({name: 'bar'},function(err){
    console.log('finished processing bar');
    console.info();
});

q.push({name: 'cap'},function(err){
    console.log('finished processing cap');
    console.info();
});

q.push({name: 'app'},function(err){
    console.log('finished processing app');
    console.info();
});

q.empty = function(){
    console.log('no more tasks wating');
    console.info();
};


q.drain = function(){
    console.log('all tasks have been processed');
    console.info();
};
