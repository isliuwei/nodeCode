/**
 *
 *  title:  ch08 readFileSync.js
 *  author: isliuwei
 *  time:   2016/09/15/11:24:44
 *  intro:  读取文件的应用
 *
 */

console.info("----------    fs readFileSync    ----------");
console.info();

var filePath = "txt/readFileSync.txt";
var encoding = "utf-8";

var fs = require("fs");

if(fs.existsSync(filePath))
{
    var fileContents = fs.readFileSync(filePath,encoding);
    console.info("read txt/readFileSync.txt contents: ");
    console.info(fileContents);
    console.info();
}
else
{
    console.log(`${filePath} is not exists.`);
    console.info();
}

console.log("fs.readfileSync() Done.");


console.info();
console.info("----------    fs readFileSync    ----------");


