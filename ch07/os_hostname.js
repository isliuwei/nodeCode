/**
 *
 *  title:  ch07 os_hostname.js
 *  author: isliuwei
 *  time:   2016/09/11/22:47:34
 *  intro:  获取操作系统主机名
 *
 */

console.info("----------    OS hostname()    ----------");
console.info();
var os = require("os");
var hostname = os.hostname();
console.info(`操作系统主机名${hostname}`);
console.info();
console.info("----------    OS hostname()    ----------");