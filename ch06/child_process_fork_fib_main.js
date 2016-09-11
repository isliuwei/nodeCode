/**
 *
 *  title:  ch06 child_process_fork_fib_main.js
 *  author: isliuwei
 *  time:   2016/09/11/20:10:17
 *  intro:  使用 fork 方法实现斐波那契数列
 *
 */

console.info("----------    child_process fork main    ----------");
console.info();

var child = require("child_process");
var fib_sub = child.fork("child_process_fork_fib_sub.js");
fib_sub.on("message",function(mes){
    console.log('斐波那契数列: ' + mes.result + "\n");
});
for(var i=0; i<10; i++)
{
    fib_sub.send({input:i});
}

console.info();
console.info("----------    child_process fork main    ----------");


