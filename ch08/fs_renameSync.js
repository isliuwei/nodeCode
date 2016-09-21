/**
 *
 *  title:  ch08 fs_renameSync.js
 *  author: isliuwei
 *  time:   2016/09/12/15:43:52
 *  intro:  重命名文件
 *
 */

console.info("----------    fs rename    ----------");
console.info();

var fs = require("fs");
console.time("rename file sync");
fs.renameSync("txt/fs-name-syn.txt","txt/fs-rename-syn.txt");
console.timeEnd("rename file sync");

var child = require("child_process");
var catFile_original = child.exec("cat txt/fs-name-syn.txt",function(error,stdout,stderr){
    console.info("cat txt/fs-name-syn.txt");
    console.info(stdout);
    console.info(stderr);
});

console.info();

var catFile_rename = child.exec("cat txt/fs-rename-syn.txt",function(error,stdout,stderr){
    console.info("cat txt/fs-rename-syn.txt");
    console.info(stdout);
    console.info(stderr);
});

console.info();
console.info("----------    fs rename    ----------");