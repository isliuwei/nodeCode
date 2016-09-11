/**
 *
 *  title:  ch06 child_process_exec_std.js
 *  author: isliuwei
 *  time:   2016/09/10/13:40:17
 *  intro:  使用exec方法绑定系统事件
 *
 */

console.info("----------    child_process exec std    ----------");
console.info();
var child = require("child_process");
var cat = child.exec('cat child_process_exec_std',function(error,stdout,stderr){
    console.info("cat child_process_exec_std.js stdout:");
    console.log(stdout);
    console.info("cat child_process_exec_std.js stderr:");
    console.log(stderr);
    if(error !== null){
        console.info("cat child_process_exec_std.js error:");
        console.log(error);
    }

});
console.info();
console.info("----------    child_process exec std    ----------");

/**
 *      exec()方法参数说明
 *      1. 对于 exec() 方法回到函数的第1个参数 error,当回调函数成功时,参数 error 取值为空(null);而当回调函数发生错误时,参数 error 则为一个 Error 实例,并且 err.code 会是子进程的退出代码,同时 err.signal 会被设置为结束进程的信号名。
 *      2. 对于 exec() 方法的第2个可选参数 options ,该参数为用于指定一些选项的 JSON 数据,其缺省选项为:
 *      {
 *          encoding: 'utf8',
 *          timeout: 0,
 *          maxBuffer: 200*1024,
 *          killSignal: 'SIGTERM',
 *          cwd: null,
 *          env: null
 *      }
 *
 *      说明: 如果 timeout 大于 0,则当进程运行超过 timeout 毫秒后会被终止;子进程使用 killSignal 进行信号结束(缺省为 'SIGTERM'); maxBuffer 指定了 stdout 或 stdin 所允许的最大数据量,如果超过这个值则子进程会被终止。
 *
 */