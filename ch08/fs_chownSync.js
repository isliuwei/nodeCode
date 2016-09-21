/**
 *
 *  title:  ch08 fs_chownSync.js
 *  author: isliuwei
 *  time:   2016/09/14/15:27:44
 *  intro:  更改文件所有权
 *
 */

console.info("----------    fs chownSync    ----------");
console.info();

var fs = require("fs");
var statSync_pre = fs.statSync("txt/chownSync.txt");
console.info("txt/chownSync.txt file info: ");
console.info(statSync_pre);
console.info();
console.info("fs.chownSync() Done.");
console.info();
fs.chownSync("txt/chownSync.txt", 1001, 1001);
console.info("fs.chownSync() Done.");
console.info();
var statSync_suf = fs.statSync("txt/chownSync/txt");
console.info("txt/chownSync.txt file info:");
console.info(statSync_suf);



console.info();
console.info("----------    fs chownSync    ----------");