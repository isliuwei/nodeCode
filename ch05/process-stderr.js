/**
 *
 *  title:  ch05 process-stderr.js
 *  author: isliuwei
 *  time:   2016/09/10/09:23:31
 *  intro:  实现标准错误输出流 -- p-stderr
 *
 */

console.info("----------    Process stderr    ----------");
console.info();
var fs = require("fs");
var filePath = "error.txt";
var filePath1 = "test.txt";
var encoding = "utf-8";
fs.readFile(filePath,encoding,function(err,data){
    if(err){
        setTimeout(function(){
            process.stderr.write(err);
        },1000);
    }else{
        process.stdout.write(data+"\n");
    }
});
console.info();
console.info("----------    Process stderr    ----------");


