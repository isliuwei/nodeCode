/**
 *
 *  title:  ch01 console-fibonacci.js
 *  author: isliuwei
 *  time:   2016/09/06/18:37:30
 *  intro:  错误与警告提示应用
 *
 */

var fs = require("fs");
var fileName = "ch01/error-warn.txt";
//var fileName = "error-warn.txt";
//var fileName = "../demo.html";
var encoding = "utf-8";
fs.readFile(fileName,encoding,function(err,data){
    if(err){
        console.error("error - \n %s",err);
        console.warn("warn - \n %s",err);
    }else{
        console.log(data);
    }
});