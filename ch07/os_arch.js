/**
 *
 *  title:  ch07 os_hostname.js
 *  author: isliuwei
 *  time:   2016/09/11/22:51:00
 *  intro:  获取操作系统架构
 *
 */

console.info("----------    OS arch()    ----------");
console.info();
var os = require("os");
var platform = os.platform();
console.info(`操作系统平台: ${platform}`);
var arch = os.arch();
console.info(`操作系统架构: ${arch}`);
console.info();
console.info("----------    OS arch()    ----------");