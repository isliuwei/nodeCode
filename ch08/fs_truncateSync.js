/**
 *
 *  title:  ch08 truncateSync.js
 *  author: isliuwei
 *  time:   2016/09/12/20:34:55
 *  intro:  修改文件长度
 *
 */

console.info("----------    fs truncateSync    ----------");
console.info();

var fs = require("fs");
var child = require("child_process");
var catFile = child.exec("cat txt/truncateSync.txt",(error,stdout,stderr)=>{
    console.log("cat txt/truncateSync.txt stdout: ");
    console.log(stdout);
    console.log(`length: ${stdout.length}`);
    console.log(stderr);
    console.info();
    fs.truncateSync("txt/truncateSync.txt",5);
    console.log('fs.truncateSync() Done.');
    var catFileTruncateSync = child.exec("cat txt/truncateSync.txt",(error,stdout,stderr)=>{
        console.log("cat txt/truncateSync.txt stdout: ");
        console.log(stdout);
        console.log(`length: ${stdout.length}`);
        console.log(stderr);
        console.info();
    });
});

console.info();
console.info("----------    fs truncateSync    ----------");

/**
 *      fs.truncate()和fs.ftruncate()唯一的区别是: fs.truncate()和fs.truncateSync()这两个方法直接使用文件路径。
 *      而fs.ftruncate()和fs.truncateSync()这两个方法需要使用文件描述符进行操作。(可能需要使用fs.open()配合使用)。
 */





