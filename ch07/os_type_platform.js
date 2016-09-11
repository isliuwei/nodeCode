/**
 *
 *  title:  ch07 os_type_platform.js
 *  author: isliuwei
 *  time:   2016/09/11/22:33:55
 *  intro:  获取当前操作系统类型和平台
 *
 */

console.info("----------    OS type() & paltform()    ----------");
console.info();

var os = require("os");
var type = os.type();
console.info(`当前操作系统类型为: ${type}`);
console.info();
var platform = os.platform();
console.info(`当前操作系统平台为: ${platform}`);

console.info();
console.info("----------    OS type() & paltform()    ----------");

