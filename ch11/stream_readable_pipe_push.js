/**
 *
 *  title:  ch11 stream_readable_pipe_push.js
 *  author: isliuwei
 *  time:   2016/09/25/15:21:53
 *  intro:  使用可读(Readable)流发送数据
 *
 */


console.info("----------    stream readable pipe push    ----------");
console.info();

var stream = require('stream');
var rs = new stream.Readable;
rs.push('Stream');
rs.push('Readable');
rs.push('Push()');
rs.push('Pipe()');
rs.push('\n');
rs.push(null);
rs.pipe(process.stdout);

console.info();
console.info("----------    stream readable pipe push    ----------");

