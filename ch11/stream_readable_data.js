/**
 *
 *  title:  ch11 stream_readable_data.js
 *  author: isliuwei
 *  time:   2016/09/25/13:47:15
 *  intro:  使用 data 事件读取文件
 *
 */

console.info("----------    stream data event    ----------");
console.info();
var fs = require('fs');

/**
 * 调用文件系统 fs 模块的 createReadStream() 方法创建可读 Readable 流
 */

var rs = fs.createReadStream('data/data.txt');

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
 * 流(Stream) 模块 ---- data 事件处理函数
 */

rs.on('data',function(chunk){
    console.info("读取 'data/data.txt' 文本文件内容。。。");
    console.info();
    console.log('读取到了 %d 字节的数据。。。',chunk.length);
    console.info();
    console.log('读取到的数据: ',chunk);
    console.info();
});

console.info();
console.info("----------    stream data event    ----------");
