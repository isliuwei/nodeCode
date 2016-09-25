/**
 *
 *  title:  ch11 stream_writable_finish.js
 *  author: isliuwei
 *  time:   2016/09/25/20:21:35
 *  intro:  可写(Writable)流 finsh 事件处理
 *
 */

console.info("----------    stream writable finsh    ----------");
console.info();
var fs = require('fs');

/**
 * 调用文件系统 fs 模块的 createReadStream() 方法创建可读 Readable 流
 */

var rs = fs.createReadStream('data/srcFinish.txt');

/**
 * 调用文件系统 fs 模块的 createWriteStream() 方法创建可读 Writable 流
 */

var ws = fs.createWriteStream('data/destFinish.txt');

/**
 * 调用 readable.setEncoding() 方法设置编码
 */

rs.setEncoding('utf8');

/**
 *  流(Stream)模块 ---- data 事件处理函数
 */

rs.on('data',function(chunk){
    console.log('data event emitted.');
    console.info();
    /**
     * 通过 ws.write() 方法返回值判断
     * 数据是已经写入目标
     * 还是仅仅写入缓存中
     */
    if(ws.write(chunk) === false){
        console.log('数据写入缓存...');
        console.info();
        rs.pause();     //  暂停可读(Readable)流
    }

});

/**
 * 流 (Stream)模块 ---- drain 事件处理函数
 */

ws.on('drain',function(){
    console.log('drain event emiited.');
    console.info();
    rs.resume();     //  恢复可读(Readable)流
});

/**
 * 流 (Stream)模块 ---- finish 事件处理函数
 */

rs.on('finish',function(){
    console.log('finish event emiited.');
    console.info();
});

/**
 * 流 (Stream)模块 ---- end 事件处理函数
 */

rs.on('end',function(){
    console.log('end event emiited.');
    console.info();
    ws.end();
});


console.info();
console.info("----------    stream writable finsh    ----------");














