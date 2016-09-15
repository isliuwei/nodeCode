/**
 *
 *  title:  ch08 linkSync.js
 *  author: isliuwei
 *  time:   2016/09/15/09:01:50
 *  intro:  创建于删除文件硬链接
 *
 */

console.info("----------    fs linkSync    ----------");
console.info();

var child = require("child_process");
var cat_pre = child.exec("cat txt/linkSync.txt",(error,stdout,stderr)=>{
        console.info("cat txt/linkSync.txt stdout: ");
        console.log(stdout);
        console.log(stderr);
    });

console.info();
var srcpath = "txt/linkSync.txt";
var dstpath = "txtlink/linkSync.txt";
var fs = require("fs");
fs.linkSync(srcpath,dstpath);
console.log("fs.linkSync() Done.");
console.info();
var cat_suf = child.exec("cat txtlink/linkSync.txt",(error,stdout,stderr)=>{
        console.info("cat txtlink/linkSync.txt stdout: ");
        console.log(stdout);
        console.log(stderr);
        fs.unlinkSync(dstpath);
        console.log("fs.unlinkSync() Done.");
        console.info();
        var ls_txtlink = child.spawn('ls',['-alh','txtlink']);


        ls_txtlink.stdout.on("data",(data)=>{
            console.info("ls -alh txtlink stdout: ");
            console.log(`stdout: ${data}`);
            console.info();
        });

        ls_txtlink.on("error",(code)=>{
            console.log(`child process error with code ${code}.`);
            console.info();
        });

        ls_txtlink.on("close",(code)=>{
            console.log(`child process closed with code ${code}.`);
            console.info();
        });

    });


console.info();
console.info("----------    fs linkSync    ----------");


