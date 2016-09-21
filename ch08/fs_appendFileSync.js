/**
 *
 *  title:  ch08 fs_appendFileSync.js
 *  author: isliuwei
 *  time:   2016/09/20/14:30:11
 *  intro:  追加写入文件
 *
 */

console.info("----------    fs appendFileSync    ----------");
console.info();
var filePath = "txt/appendFileSync.txt";
var fs = require("fs");
if(fs.existsSync(filePath)){
    var fileContentsPre = fs.readFileSync(filePath,"utf-8");
    console.info("read txt/appendFileSync.txt contents: ");
    console.info(fileContentsPre);
    console.log("fs.readFileSync() Done.");
    console.info();
    console.info("fs.readFileSync() Done.");
    fs.writeFileSync(filePath,"fs.appendFileSync(filename,data[,options])\n");
    console.log("fs.writeFileSync() Done.");
    console.info();
    var fileContentsSuf = fs.readFileSync(filePath,"utf-8");
    console.info("read txt/appendFileSync.txt contens: ");
    console.info(fileContentsSuf);
    console.log("fs.readFileSync() Done.");
    console.info();
    fs.appendFileSync(filePath,"add filename 测试文本 to appendFileSync.txt\n");
    console.log("fs.appendFileSync() Done.");
    console.info();
    var fileContentsAdd = fs.readFileSync(filePath,"utf-8");
    console.info("read txt/appendFileSync.txt contents: ");
    console.info(fileContentsAdd);
    console.log("fs.readFileSync() Done.");
    console.info();
}else{
    console.log(filePath + "is not exists.");
    console.info();
}