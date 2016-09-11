/**
 *
 *  title:  ch06 child_process_spawn_std.js
 *  author: isliuwei
 *  time:   2016/09/10/11:55:41
 *  intro:  使用spawn方法绑定系统事件
 *
 */

console.info("----------    child_process spawn std    ----------");
console.info();
var child = require("child_process");
//var cat  = child.spawn('cat',['../1.js']);
var cat  = child.spawn('cat');

/**
 *  捕获控制台输出对象 stdout 的 data 事件
 */

cat.stdout.on('data',(d) => {
    console.log(d.toString());
});

/**
 *  绑定系统 exit 事件
 */

cat.on('exit',function(){
    console.log('child_process cat on exit!');
});

/**
 *  绑定系统  close 事件
 */

cat.on('close',function(){
    console.log('child_process cat on close!');
});

//通过控制台输入对象 stdin 写入数据
cat.stdin.write("child_process cat on data!");

//结束控制台输入对象
cat.stdin.end();
















/*
process.stdin.on('readable',()=>{
    var x = process.stdin.read();
    if(x){
        process.stdout.write(x);
        //process.exit(0);
    }

});
*/