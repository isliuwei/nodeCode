/**
 *
 *  title:  ch08 fs_statSync.js
 *  author: isliuwei
 *  time:   2016/09/14/15:27:44
 *  intro:  获取文件信息
 *
 */

console.info("----------    fs statSync    ----------");
console.info();

var fs = require("fs");
var statSync = fs.statSync("fs_statSync.js");
console.log("fs_statSync.js file info:");
console.info(statSync);
console.info();
console.info("fs.statSync() Done.");

/*

fs.stat("fs_statSync.js",function(error,fileInfo){
    console.log(fileInfo);
});

*/


console.info();
console.info("----------    fs statSync    ----------");