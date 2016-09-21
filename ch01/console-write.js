/**
 *
 *  title:  ch01 console-write.js
 *  author: isliuwei
 *  time:   2016/09/06/20:30:39
 *  intro:  向控制台输出组合控制键
 *
 */

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.write("Delete me!Wait for 3 seconds......");
var timeout = setTimeout(function(){
    rl.write(null,{ctrl:true,name:"u"});
},3000);