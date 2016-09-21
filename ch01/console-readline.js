/**
 *
 *  title:  ch01 console-readline.js
 *  author: isliuwei
 *  time:   2016/09/06/19:46:38
 *  intro:  读取命令行输入的信息
 *
 */

//引入  readline  模块
var readline = require("readline");

//初始化  rl  对象
/**
 *  创建具体的readline模块对象,使用  readline  模块的  createInterface()  方法实现,并定义好标准的输入输出流。
 */
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//读取命令行输入信息
rl.question("What your name?\n",function(answer){
    //Log the answer in a database
    console.log("My name is", answer);
    rl.close();
});

//ES6 箭头函数 && 字符串模板
rl.question("Please enter some word here:\n",(answer)=>{
    console.log(`Your enter words is: ${answer}`);
    rl.close();
});


