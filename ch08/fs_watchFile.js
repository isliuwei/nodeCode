/**
 *
 *  title:  ch08 fs_watchFile.js
 *  author: isliuwei
 *  time:   2016/09/20/15:00:00
 *  intro:  监控文件的应用
 *
 */

console.info("----------    fs watchFile    ----------");
console.info();

var filePath = "txt/watchFile.txt";
var fs = require("fs");
/**
 *  监控文件方法
 *  fs.watchFile(filename,[options],listener);
 */

fs.watchFile(filePath,function(curr,prev){
    console.log("the current mtime is: " + curr.mtime);
    console.log("the previous mtime was: " + prev.mtime);

    /**
     *  监控文件方法
     *  fs.watch(filename,[options],listener);
     */

    fs.watch(filePath,function(event,filename){
        console.log("the events is: " + event);
        console.log("the filename is: " + filename);
    });

});

console.info();
console.info("----------    fs watchFile    ----------");
