/**
 *
 *  title:  ch11 stream_readable_pipe_push.js
 *  author: isliuwei
 *  time:   2016/09/25/15:46:44
 *  intro:  使用可读(Readable)流读取文件
 *
 */

console.info("----------    stream read    ----------");
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

rs.on('readable',function(){
    console.log('readable event emitted.');
    console.info();
    var chunk;
    while(null!==(chunk = rs.read())){
        console.log("得到了 %d 字节的数据: ", chunk.length);
        console.info();
        console.log("读取到的数据: ",chunk);
        console.info();
    }
});

rs.on('end',function(){
    console.log('end event emitted.');
    console.info();
});

console.info();
console.info("----------    stream read    ----------");
