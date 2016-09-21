/**
 *
 *  title:  ch08 fs_openAsync.js
 *  author: isliuwei
 *  time:   2016/09/12/16:33:54
 *  intro:  打开与关闭文件
 *
 */

console.info("----------    fs openAsync    ----------");
console.info();

var fs = require("fs");
var child = require("child_process");
var catFileAsync = child.exec("cat txt/openAsync.txt",(error,stdout,stderr) =>{
        console.info("cat txt/openAsync.txt stdout:");
        console.log(stdout);
        console.log(stderr);
});

console.info();

var fs = require("fs");
fs.open("txt/openAsync.txt","a",function(error,fd){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.info("文件描述符: " + fd);
        console.log("fs.open() Done.");
        console.info();
    }

    fs.close(fd,function(){
        console.info("文件描述符: " + fd);
        console.log("fs.close() Done.");
        console.info();
    });


});

console.info();
console.info("----------    fs openAsync    ----------");

/**
 *  对于操作系统内核而言,所有文件的
 */