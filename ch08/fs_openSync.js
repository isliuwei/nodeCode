/**
 *
 *  title:  ch08 fs_openSync.js
 *  author: isliuwei
 *  time:   2016/09/12/16:23:53
 *  intro:  打开与关闭文件
 *
 */

console.info("----------    fs openSync    ----------");
console.info();

var fs = require("fs");
var child = require("child_process");
var catFileSync = child.exec("cat txt/openSync.txt",(error,stdout,stderr) =>{
        console.info("cat txt/openSync.txt stdout:");
        console.log(stdout);
        console.log(stderr);
    });

console.info();

var fs = require("fs");
var fd = fs.openSync("txt/openSync.txt","a");
console.info("文件描述符: " + fd);
console.log("fs.openSync() Done.");
console.info();
fs.closeSync(fd);
console.info("文件描述符: " + fd);
console.log("fs.closeSync() Done.");

console.info();
console.info("----------    fs openSync    ----------");