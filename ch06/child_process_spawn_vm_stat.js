/**
 *
 *  title:  ch06 child_process_spawn_vm_stat.js
 *  author: isliuwei
 *  time:   2016/09/10/14:19:31
 *  intro:  查看物理内存使用状态
 *
 */


console.info("----------    child_process spawn vm_stat    ----------");
console.info();
var child = require("child_process");
var vm_stat = child.spawn('vm_stat');


/**
 *  捕获标准输出并将其打印到控制台
 */

vm_stat.stdout.on('data',(data) => {
    console.log(`标准输出:\n${data}`);
});


/**
 *  捕获标准错误输出并将其打印到控制台
 */

vm_stat.stderr.on('data',(data) => {
    console.log(`标准错误输出:\n${data}`);
});


/**
 *  注册子进程关闭事件
 */

vm_stat.on('exit',(code,signal) => {
    console.log(`子进程已退出,代码: ${code}`);
});

console.info();
console.info("----------    child_process spawn vm_stat    ----------");
