/**
 *
 *  title:  ch08 symlinkSync.js
 *  author: isliuwei
 *  time:   2016/09/15/09:59:55
 *  intro:  创建文件符号链接(快捷方式)
 *
 */

console.info("----------    fs symlinkSync    ----------");
console.info();

var child = require("child_process");
var cat_pre = child.exec("cat txt/symlinkSync.txt",(error,stdout,stderr)=>{

        console.log("cat txt/symlinkSync.txt stdout: ");
        console.log(stdout);
        console.log(stderr);

    });

console.info();
var scrpath = "txt/symlinkSync.txt";
var dstpath = "txtlink/symlinkSync.txt";
var fs = require("fs");
fs.symlinkSync(scrpath,dstpath);
console.log("fs.symlinkSync() Done.");
console.info();
var cat_suf = child.exec("cat txt/symlinkSync.txt",(error,stdout,stderr)=>{
        console.info("cat txtlink/symlinkSync.txt stdout: ");
        console.log(stdout);
        console.log(stderr);
        var ls_txtlink = child.spawn("ls",['-alh','txtlink']);


        ls_txtlink.stdout.on('data',(data)=>{
            console.info("ls -alh txtlink stdout: ");
            console.log(`stdout: ${data}`);
            console.info();
        });

        ls_txtlink.on('error',(code)=>{
            console.log(`child process error with code ${code}.`);
            console.info();
        });

        ls_txtlink.on("close",(code)=>{
            console.log(`child process closed with code ${code}.`);
            console.info();
        });


    });


console.info();
console.info("----------    fs symlinkSync    ----------");