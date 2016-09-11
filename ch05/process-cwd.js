/**
 *
 *  title:  ch05 process-cwd.js
 *  author: isliuwei
 *  time:   2016/09/10/08:42:56
 *  intro:  获取应用程序当前目录
 *
 */

console.info("----------    Process cwd    ----------");
console.info();
console.log("Current directory:" + process.cwd());
console.info();
console.info("----------    Process cwd    ----------");

/**
 *  Process模块是Node.js框架的一个全局内置对象,Node.js代码可以在任何位置访问该对象,而且无须使用require引用Process模块。
 *  实际上这个对象就是Node.js代码宿主的操作系统进程对象。
 *  使用Process模块可以截获进程的异常、退出等事件,可以获取进程的环境变量、当前目录、内存占用等信息,还可以进行工作目录的切换、进程退出等操作。
 */