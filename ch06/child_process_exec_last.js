/**
 *
 *  title:  ch06 child_process_exct_last.js
 *  author: isliuwei
 *  time:   2016/09/10/14:49:30
 *  intro:  创建子进程统计系统登录次数
 *
 */


console.info("----------    child_process spawn exec last    ----------");
console.info();
var child = require("child_process");
var last = child.exec("last | wc -l");


/**
 *  捕获控制台输出对象 stdout 的 data 事件
 */

last.stdout.on('data',(data) => {
    console.log(`系统登录次数统计: ${data}`);
});



/**
 *  绑定系统 exit 事件
 */

last.on('exit',(code) => {
    console.log(`子进程已关闭,代码: ${code}`);
});

console.info();
console.info("----------    child_process spawn exec last    ----------");

