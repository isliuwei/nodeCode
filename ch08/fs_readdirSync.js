/**
 *
 *  title:  ch08 readdirSync.js
 *  author: isliuwei
 *  time:   2016/09/15/11:17:05
 *  intro:  读取文件目录
 *
 */

console.info("----------    fs readdirSync    ----------");
console.info();


var path = "txt";
var fs = require("fs");
var files = fs.readdirSync(path);
console.info("read directory txt: ");
console.log(files);
console.log(Array.isArray(files));
console.log(files.reverse());
console.log("fs.readdirSync() Done.");


console.info();
console.info("----------    fs readdirSync    ----------");