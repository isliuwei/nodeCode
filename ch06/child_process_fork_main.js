/**
 *
 *  title:  ch06 child_process_fork_main.js
 *  author: isliuwei
 *  time:   2016/09/10/22:03:37
 *  intro:  使用 fork 方法实现进程间通信
 *
 */

console.info("----------    child_process fork main    ----------");
console.info();
/**
 *  child_process fork
 *  @type {exports}
 */
var child = require("child_process");
var sub = child.fork("child_process_fork_sub.js");
/**
 *  fork message event
 */

//sub process message
sub.on("message",function(mes){
    console.log(mes.sub);
});

//main send message to sub
sub.send({main:'main process send message to sub process!'});

console.info();
console.info("----------    child_process fork main    ----------");
