/**
 *
 *  title:  ch11 stream_readable_error.js
 *  author: isliuwei
 *  time:   2016/09/25/14:07:44
 *  intro:  可读流错误事件处理
 *
 */

console.info("----------    stream error event    ----------");
console.info();
var fs = require('fs');

/**
 * 调用文件系统 fs 模块的 createReadStream() 方法创建可读 Readable 流
 */

var rs = fs.createReadStream('data/error.txt');

/**
 * 调用 readable.setEncoding() 方法设置编码
 */

rs.setEncoding('utf8');

/**
 * 流(Stream) 模块 ---- readable 事件处理函数
 */

rs.on('readable',function(){
    console.log('readable event emitted.');
    console.info();
});

/**
 * 流(Stream) 模块 ---- error 事件处理函数
 */

rs.on('error',function(){
    console.log('error event emitted.');
    console.info();
});


console.info();
console.info("----------    stream error event    ----------");
