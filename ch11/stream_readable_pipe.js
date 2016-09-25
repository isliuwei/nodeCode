/**
 *
 *  title:  ch11 stream_readable_pipe.js
 *  author: isliuwei
 *  time:   2016/09/25/16:32:13
 *  intro:  使用 pipe 方法实现复制文件
 *
 */

console.info("----------    stream pipe write file    ----------");
console.info();
var fs = require('fs');


/**
 * 调用文件系统 fs 模块的 createReadStream() 方法创建可读 Readable 流
 */

var readable = fs.createReadStream('data/srcFile.txt');

/**
 * 调用文件系统 fs 模块的 createWriteStream() 方法创建可读 Writable 流
 */

var writable = fs.createWriteStream('data/destFile.txt');

/**
 * 所有来自 readable 的数据会被写入到 'data/destFile.txt' 文本文件中
 */

readable.pipe(writable);



console.info();
console.info("----------    stream pipe write file    ----------");






