/**
 *
 *  title:  ch06 child_process_fork_usage.js
 *  author: isliuwei
 *  time:   2016/09/10/21:32:30
 *  intro:  使用 fork 方法获取CPU信息
 *
 */


console.info("----------    child_process fork usage    ----------");
console.info();

/**
 *  child_process fork
 *  @type {exports.fork}
 *
 */

var child = require("child_process");
var fork = child.fork;

/**
 *  获取当期机器的 CPU 内核数量
 */

var cpus = require("os").cpus();
console.log("当前机器 CPU 内核数量: " + cpus.length);
for(var i=0; i<cpus.length;i++)
{
    /**
     *
     *  通过 fork() 方法创建新的子进程
     *
     */
    console.log("Fork a new child_process now......");
    fork("./worker.js");
}

console.info();
console.info("----------    child_process fork usage    ----------");
