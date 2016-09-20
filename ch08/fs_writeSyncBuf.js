/**
 *
 *  title:  ch08 fs_writeSyncBuf.js
 *  author: isliuwei
 *  time:   2016/09/20/14:05:12
 *  intro:  功能增强的写文件应用
 *
 */

console.info("----------    fs writeSync    ----------");
console.info();

var filePath = "txt/writeSync.txt";
var fs = require("fs");
fs.open("filePath","w",(err,fd)=>{
    if(err){
        console.log(err);
    }else{
        console.log("fs.open() Done.");
        console.info();
        var fileContentsPre = fs.readFileSync("filePath","utf-8");
        console.info("read txt/writeSync.txt contents: ");
        console.info(fileContentsPre);
        console.log("fs.readFileSync() Done.");
        console.info();
        console.info("write to txt/writeSync.txt: ");
        var buf = new Buffer("fs.writeSync(fd,buffer,offset,length[,position])\n");
        console.log(buf.toString());
        var bufLen = fs.writeSync(fd,buf,0,buf.length,0);
        console.log("fs.writeSync() Done.");
        console.info();
        console.log("写入数据的字节数: " + bufLen);
        console.info();
        var fileContentsSuf = fs.readFileSync(filePath,"utf-8");
        console.info("read txt/writeSync.txt contents: ");
        console.info(fileContentsSuf);
        console.log("fs.readFileSync() Done.");
        console.info();

        fs.close(fd,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("fs.close() Done.");
                console.info();
            }
        });

    }
});


console.info();
console.info("----------    fs writeSync    ----------");
