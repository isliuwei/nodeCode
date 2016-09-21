/**
 *
 *  title:  ch08 ftruncateAsync.js
 *  author: isliuwei
 *  time:   2016/09/12/20:28:21
 *  intro:  截取文件内容
 *
 */




console.info("----------    fs ftruncateAsync    ----------");
console.info();


var fs = require("fs");
var child = require("child_process");
var catFile = child.exec("cat txt/ftruncateAsync.txt",(error,stdout,stderr)=>{
        console.log("cat txt/ftruncateAsync.txt stdout: ");
        console.log(stdout);
        console.log(stderr);
        fs.open("txt/ftruncateAsync.txt","a",(error,fd)=>{
            if(error)
            {
                console.log(error);
            }
            else
            {
                fs.ftruncate(fd,5,()=>{
                    var catFileFtruncate = child.exec("cat txt/ftruncateAsync.txt",(error,stdout,stderr)=>{
                            console.log("cat txt/ftruncateAsync.txt stdout: ");
                            console.log(stdout);
                            console.log(stderr);
                        });
                });
            }
            fs.close(fd,function(){
                console.info("文件描述符: " + fd);
                console.log("fs.close() Done.");
                console.info();
            });
        });
    });


console.info();
console.info("----------    fs ftruncateAsync    ----------");
