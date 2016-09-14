/**
 *
 *  title:  ch08 chmodSync.js
 *  author: isliuwei
 *  time:   2016/09/14/15:55:55
 *  intro:  更改文件权限历史
 *
 */

console.info("----------    fs chmodSync    ----------");
console.info();

var fs = require("fs");
var child = require("child_process");
var ls_file_pre = child.spawn("ls",['-alh','txt/chmodSync.txt']);


ls_file_pre.stdout.on("data",(data)=>{
    console.log(`stdout: ${data}`);

    fs.chmodSync("txt/chmodSync.txt",777);

    console.info("chmodSync() Done.");
    console.info();

    var ls_file_suf = child.spawn("ls",['-alh','txt/chmodSync.txt']);

    ls_file_suf.stdout.on("data",(data)=>{
        console.log(`stdout: ${data}`);
        console.info();
    });

    ls_file_suf.on('error',(code)=>{
        console.log(`child process error with code: ${code}`);
        console.info();
    });

    ls_file_suf.on('close',(code)=>{
        console.log(`child process closed with code: ${code}`);
        console.info();
    });

});

ls_file_pre.on('error',(code)=>{
    console.log(`child process error with code: ${code}`);
    console.info();
});

ls_file_pre.on('close',(code)=>{
    console.log(`child process closed with code: ${code}`);
    console.info();
});


console.info();
console.info("----------    fs chmodSync    ----------");







