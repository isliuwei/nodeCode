/**
 *
 *  title:  ch06 child_process_spawn_ls.js
 *  author: isliuwei
 *  time:   2016/09/10/14:07:43
 *  intro:  创建子进程查看用户目录
 *
 */

console.info("----------    child_process spawn ls    ----------");
console.info();
var child = require("child_process");
var ls_desktop = child.spawn('ls',['-alh','//Users/liuwei/Desktop']);


/**
 *  捕获控制台输出对象 stdout 输出捕获数据
 */

ls_desktop.stdout.on('data',(data) =>{
    console.log(`stdout: ${data}`);
});



/**
 *  绑定系统 error 事件
 */

ls_desktop.on('error',(code) =>{
    console.log(`child process error with code ${code}`);
});


/**
 *  绑定系统 close 事件
 */

ls_desktop.on('close',(code) =>{
    console.log(`child process closed with code ${code}`);
});


/**
 *  绑定系统 exit 事件
 */

ls_desktop.on('exit',(code) =>{
    console.log(`child process exited with code ${code}`);
});

