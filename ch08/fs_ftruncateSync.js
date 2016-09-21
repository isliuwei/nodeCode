/**
 *
 *  title:  ch08 ftruncateSync.js
 *  author: isliuwei
 *  time:   2016/09/12/19:33:45
 *  intro:  截取文件内容
 *
 */

console.info("----------    fs ftruncateSync    ----------");
console.info();
var fs = require("fs");
var child = require("child_process");
var catFile = child.exec("cat txt/ftruncateSync.txt",(error,stdout,stderr)=>{
        console.log("cat txt/ftruncateSync.txt stdout: ");
        console.log(stdout);
        console.log(stderr);
        var fd = fs.openSync("txt/ftruncateSync.txt","a");
        fs.ftruncateSync(fd,5);
        console.info("文件描述符: " + fd);
        console.info();
        console.log("fs.ftruncateSync() Done");
        fs.closeSync(fd);
        var catFileFtruncate = child.exec("cat txt/ftruncateSync.txt",(error,stdout,stderr)=>{
                console.log("cat txt/ftruncateSync.txt stdout: ");
                console.log(stdout);
                console.log(stderr);

            });

        console.info();


    });


console.info();
console.info("----------    fs ftruncateSync    ----------");