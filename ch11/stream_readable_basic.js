/**
 *
 *  title:  ch11 stream_readable_basic.js
 *  author: isliuwei
 *  time:   2016/09/25/12:34:54
 *  intro:  创建可读(Readable)流
 *
 */

console.info("----------    stream createReadStream    ----------");
console.info();
var fs = require('fs');

/**
 * 调用文件系统 fs 模块的 createReadStream() 方法创建可读 Readable 流
 */

var rs = fs.createReadStream('data/basic.txt');

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
    console.log('data event emitted.');
    console.info();
});

/**
 * 流(Stream) 模块 ---- error 事件处理函数
 */

rs.on('error',function(){
    console.log('error event emitted.');
    console.info();
});

/**
 * 流(Stream) 模块 ---- end 事件处理函数
 */

rs.on('end',function(){
    console.log('end event emitted.');
    console.info();
});

/**
 * 流(Stream) 模块 ---- close 事件处理函数
 */

rs.on('close',function(){
    console.log('close event emitted.');
    console.info();
});



console.info();
console.info("----------    stream createReadStream    ----------");




