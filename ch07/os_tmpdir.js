/**
 *
 *  title:  ch07 os_tmpdir.js
 *  author: isliuwei
 *  time:   2016/09/11/22:42:26
 *  intro:  获取操作系统默认的临时文件目录
 *
 */

console.info("----------    OS tmpdir()    ----------");
console.info();
var os = require("os");
var type = os.type();
var tmpdir = os.tmpdir();
console.info(`当前${type}系统临时文件目录${tmpdir}`);
console.info();
console.info("----------    OS tmpdir()    ----------");