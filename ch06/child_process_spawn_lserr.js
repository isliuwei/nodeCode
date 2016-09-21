/**
 *
 *  title:  ch06 child_process_spawn_lserr.js
 *  author: isliuwei
 *  time:   2016/09/10/14:19:31
 *  intro:  查看用户目录出现错误的处理方法
 *
 */

console.info("----------    child_process spawn lserr    ----------");
console.info();
var child = require("child_process");
var ls_error = child.spawn('ls',['-alh','/error']);


/**
 *  捕获控制台错误对象 stderr 输出捕获数据
 */

ls_error.stderr.on('data',(data) =>{
    console.log(`stderr: ${data}`);
});



/**
 *  绑定系统 error 事件
 */

ls_error.on('error',(code) =>{
    console.log(`child process error with code ${code}`);
});


/**
 *  绑定系统 close 事件
 */

ls_error.on('close',(code) =>{
    console.log(`child process closed with code ${code}`);
});


/**
 *  绑定系统 exit 事件
 */

ls_error.on('exit',(code) =>{
    console.log(`child process exited with code ${code}`);
});

