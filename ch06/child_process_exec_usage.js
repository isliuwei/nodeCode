/**
 *
 *  title:  ch06 child_process_exec_usage.js
 *  author: isliuwei
 *  time:   2016/09/10/11:09:41
 *  intro:  使用exec方法创建子进程
 *
 */

console.info("----------    child_process exec usage    ----------");
console.info();
/**
 *
 * child_process exec
 * @type {exports.exec|*}
 *
 */

var child = require("child_process");

var ls_desktop_error = child.exec("ls -alh Desktop",function(err,stdout,stderr){
    if(err){
        console.log("ls_desktop_error_stderr: " + stderr);
    }else{
        console.log("ls_desktop_error_stdout: " + stdout);
    }

});

var ls_desktop_right = child.exec("ls -alh /Users/liuwei/Desktop/nodeCode/ch06",function(err,stdout,stderr){
    if(err){
        console.log("ls_desktop_right_stderr: " + stderr);
    }else{
        console.log("ls_desktop_right_stdout: " + stdout);
    }

});

var load_welcome_page = child.exec("node ../1.js",(err,stdout,stderr) =>{
        if(err){
            console.log(`error info:${stderr}`);
        }else{
            //console.log("child_process load_welcome_page is start!");
            //console.log(`stdout info:${stdout}`);
            //you can localhost:3000
        }
    });

console.info("----------    child_process exec usage    ----------");

/**
 *      spawn语法:    child_process.spawn(command[, args][, options])
 *                   eg: child_process.spawn('ls',['-alh','/usr']);
 *      exec语法:     child_process.exec(command[, options][, callback])
 *                   eg: child_process.exec('ls -alh /usr');
 *
 *      关于 spawn 方法和 exec 方法的区别
 *      第一,spawn方法的参数必须要放到arg数组参数中而不能放到command参数里面。而 exec 方法不存在这个问题,可以直接放在command参数里面。
 *      第二,child_process 模块的 spawn 方法是 "异步中异步",意思是指在子进程开始执行时,它就开始从一个流总将数据从子进程返回给Node。具体实践中,当想要子进程返回大量数据给Node.js框架时(比如说图像处理,读取二进制数据等),最好使用 spawn 方法。
 *      第三,child_process 模块的 exec 方法是 "同步中的异步",意思是尽管exec是异步的,但是它一定要等到子进程运行结束以后再一次性返回所有的buffer数据。具体实践中,如果 exec 的 buffer 体积设置的不够大,它将会以一个"maxBuffer exceeded"错误失败而告终。
 *
 */
