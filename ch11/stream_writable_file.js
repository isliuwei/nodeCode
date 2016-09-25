/**
 *
 *  title:  ch11 stream_writable_file.js
 *  author: isliuwei
 *  time:   2016/09/25/18:48:45
 *  intro:  使用可写 (Writable) 流写文件
 *
 */

console.info("----------    stream writable file    ----------");
console.info();
var fs = require('fs');

/**
 * 调用文件系统 fs 模块的 createWriteStream() 方法创建可读 Writable 流
 */

var ws = fs.createWriteStream('data/writable.txt');
ws.write('stream - ');
ws.write('writable - ');
ws.write('file - ');

/**
 * 通过 setTimeout() 方法设置 1000ms 时间延迟
 * 自行关闭文件流
 */

setTimeout(function(){
    ws.end('end.\n');

    var child = require("child_process");
    var catFile = child.exec('cat data/writable.txt',function(err,stdout,stderr){
        console.log('read writable.txt contents: \n');
        console.log(stdout);
    });

},1000);



console.info();
console.info("----------    stream writable file    ----------");







