/**
 *
 *  title:  ch07 os_networkInterfaces.js
 *  author: isliuwei
 *  time:   2016/09/11/23:11:31
 *  intro:  获取网络接口信息
 *
 */

console.info("----------    OS networkInterfaces    ----------");
console.info();
var os = require("os");
var networkInterfaces = os.networkInterfaces();
console.info(networkInterfaces);
console.info();
console.info("----------    OS mem()    ----------");