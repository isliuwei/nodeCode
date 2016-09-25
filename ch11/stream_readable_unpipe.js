/**
 *
 *  title:  ch11 stream_readable_unpipe.js
 *  author: isliuwei
 *  time:   2016/09/25/18:13:30
 *  intro:  解除 pipe 方法设置的流
 *
 */

console.info("----------    stream pipe write file    ----------");
console.info();
var fs = require('fs');


/**
 * 调用文件系统 fs 模块的 createReadStream() 方法创建可读 Readable 流
 */

var readable = fs.createReadStream('data/srcUnFile.txt');

/**
 * 调用文件系统 fs 模块的 createWriteStream() 方法创建可读 Writable 流
 */

var writable = fs.createWriteStream('data/destUnFile.txt');

/**
 * 所有来自 readable 的数据会被写入到"data/destUnFile.txt"文本文件中
 */

readable.pipe(writable);

/**
 * 通过 setTimeout() 方法设置1毫秒时间延迟
 * 并通过 unpipe() 方法解除 pipe() 方法设置的流
 * 最后自行关闭文件流
 */

setTimeout(function(){
    console.log('停止写入到 data/destFile.txt');
    console.info();
    readable.unpipe(writable);
    console.log('自行关闭文件流');
    console.info();
    writable.end();
},1);


console.info();
console.info("----------    stream pipe write file    ----------");

