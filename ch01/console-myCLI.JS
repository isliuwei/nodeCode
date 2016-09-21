/**
 *
 *  title:  ch01 console-myCLI.js
 *  author: isliuwei
 *  time:   2016/09/06/20:38:49
 *  intro:  模拟一个简单的控制台界面
 *
 */

var readline = require("readline");
var rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});
rl.setPrompt("myCLI > ");
rl.prompt();
rl.on('line',function(input){
    var shell = input.trim();
    switch(shell){
        case '-h':
            console.log("-h  ----  帮助命令\n-v  ----  版本信息\n-i  ----  关于myCLI\n-c  ----  关闭myCLI\n");
            break;
        case '-i':
            console.log("myCLI from https://github.com/isliuwei");
            break;
        case '-v':
            console.log("version 0.0.1");
            break;
        case '-c':
            console.log("You will close myCLI!");
            rl.close();
            process.exit(0);
            break;
        default:
            console.log("Thank for you using myCLI,please input right shell,you can input '-h' see more shell!");
    }
    rl.prompt();
});

