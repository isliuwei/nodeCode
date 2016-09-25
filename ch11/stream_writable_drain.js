/**
 *
 *  title:  ch11 stream_writable_drain.js
 *  author: isliuwei
 *  time:   2016/09/25/19:25:19
 *  intro:  可写(Writable)流 drain 事件处理
 *
 */

console.info("----------    stream writable drain    ----------");
console.info();
var fs = require('fs');

/**
 * 调用文件系统 fs 模块的 createReadStream() 方法创建可读 Readable 流
 */

var rs = fs.createReadStream('data/srcDrain.mp4');

/**
 * 调用文件系统 fs 模块的 createWriteStream() 方法创建可写 Writable 流
 */

var ws = fs.createWriteStream('data/destDrain.mp4');

/**
 * 调用 readable.setEncoding() 方法设置编码
 */

rs.setEncoding('utf8');

rs.on('data',function(chunk){
    console.log('data event emitted');
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

ws.on('end',function(){
    console.log('drain event emiited.');
    console.info();
    rs.resume();     //  恢复可读(Readable)流
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
console.info("----------    stream writable drain    ----------");

/**
 *
 *
 * ws.write() 方法向底层系统写入数据, 并在数据被处理完毕后调用其回调函数;
 * 其返回值表明是否应该立即继续写入,
 * 如果数据需要滞留在内部,则其会返回 false,否则返回 true.
 *
 * 判断 ws.write() 方法将缓存数据写入目标文件的操作是否完成,
 * 如果没有完成(返回值为 false),则调用 rs.pause()方法暂停可读(Readable)流,
 * 并触发可写(Writable)流的drain事件,这种方式可以有效地避免缓存溢出的问题.
 *
 * 如果在调用 writable.write(chunk)方法后返回false,则表明drain事件可以继续向流写入更多的数据,
 * 通过对 drain 事件的合理使用,可以有效地避免缓存溢出的问题.
 *
 *
 */








