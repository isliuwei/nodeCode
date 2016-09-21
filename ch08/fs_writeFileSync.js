/**
 *
 *  title:  ch08 writeFileSync.js
 *  author: isliuwei
 *  time:   2016/09/20/13:45:12
 *  intro:  写文件应用
 *
 */

console.info("----------    fs writeFileSync    ----------");
console.info();

var filePath = "txt/writeFileSync.txt";
var fs = require("fs");
if(fs.existsSync(filePath)){
    var fileContentsPre = fs.readFileSync(filePath,"utf-8");
    console.info("read txt/writeFileSync.txt contents: ");
    console.info(fileContentsPre);
    console.log("fs.readFileSync() Done.");
    console.info();
    console.info("write to txt/writeFileSync.txt: ");
    fs.writeFileSync(filePath,"fs.writeFileSync测试文本");
    console.log("fs.writeFileSync() Done.");
    console.info();
    var fileContentsSuf = fs.readFileSync(filePath,"utf-8");
    console.info("read txt/writeFileSync.txt contents: ");
    console.info(fileContentsSuf);
    console.log("fs.readFileSync() Done.");
    console.info();
}else{
    console.log(filePath+"is not exists.");
    console.info();
}

console.info();
console.info("----------    fs writeFileSync    ----------");
