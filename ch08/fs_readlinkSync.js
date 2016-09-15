/**
 *
 *  title:  ch08 readlinkSync.js
 *  author: isliuwei
 *  time:   2016/09/15/10:21:01
 *  intro:  读取文件符号链接(快捷方式)
 *
 */

console.info("----------    fs readlinkSync    ----------");
console.info();

var srcpath = "txt/symlinkSync.txt";
var linkpath = "txtlink/symlinkSync.txt";

var fs = require("fs");
var linkString = fs.readlinkSync(linkpath);
console.info(`read linkpath: ${linkString}`);
console.log("fs.readlinkSync() Done.");
var srcpath = fs.readlinkSync(srcpath);
console.info(`read srcpath: ${srcpath}`);
console.log("fs.readlinkSync() Done.");


console.log.info();
console.info("----------    fs readlinkSync    ----------");

/**
 *  文件符号链接实际上就是文件的快捷方式,使用 fs.readlink() 与 fs.readlinkSync() 方法读取文件符号链接时会成功操作,而读取正常文件时会发生异常错误。
 */
