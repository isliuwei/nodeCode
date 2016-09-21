/**
 *
 *  title:  ch05 process-chdir.js
 *  author: isliuwei
 *  time:   2016/09/10/08:53:23
 *  intro:  改变应用程序目录
 *
 */

console.info("----------    Process chdir    ----------");
console.info();
console.log("Current directory:" + process.cwd());
console.log("Change directory to: /Users/liuwei/Desktop/nodeCode");
process.chdir("/Users/liuwei/Desktop/nodeCode");
console.log("Current directory:" + process.cwd());
console.info();
console.info("----------    Process chdir    ----------");

/**
 * 使用process.chdir()改变目录时,其路径参数必须是完整的路径
 */
