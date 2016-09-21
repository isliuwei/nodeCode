/**
 *
 *  title:  ch07 os_release.js
 *  author: isliuwei
 *  time:   2016/09/11/22:55:16
 *  intro:  获取操作系统的发行版本
 *
 */

console.info("----------    OS release()    ----------");
console.info();
var os = require("os");
var type = os.type();
console.info(`操作系统类型: ${type}`);
console.info();
var release = os.release();
console.info(`操作系统发行版本: ${release}`);
console.info();
console.info("----------    OS release()    ----------");