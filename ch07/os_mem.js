/**
 *
 *  title:  ch07 os_mem.js
 *  author: isliuwei
 *  time:   2016/09/11/23:11:31
 *  intro:  获取操作系统内存状态
 *
 */

console.info("----------    OS mem()    ----------");
console.info();
var os = require("os");
var totalmem = os.totalmem();
console.info(`操作系统内存总量为: ${totalmem} byte.`);
console.info(`操作系统内存总量为: ${parseInt(totalmem/1024/1024)} MB.`);
console.info();
var freemem = os.freemem();
console.info(`操作系统空闲内存为: ${freemem} byte.`);
console.info(`操作系统空闲内存为: ${parseInt(freemem/1024/1024)} MB.`);
console.info();
console.info("----------    OS mem()    ----------");
