/**
 *
 *  title:  ch01 stderr-file.js
 *  author: isliuwei
 *  time:   2016/09/06/18:48:23
 *  intro:  重定向标准错误输出
 *
 */

var fs = require("fs");
var fileName = "ch01/not-found.txt";
var encoding = "utf-8";
fs.readFile(fileName,encoding,function(err,data){
    if(err){
        console.error("Error - \n %s",err);
        console.warn("Warn - \n %s",err);
    }else{
        console.log(data);
    }
});


/**
 *  Node.js 重定向标准错误输出流
 *  在控制台使用 node 命令重定向标准错误输出流到文件的语法如下:
 *  语法: node js-filename.js 2> error.log
 *  其中: js-filename表示js文件名  参数"2>"表示重定向标准错误输出流到文件  error.log表示需要报错错误信息的日志文件
 *
 */