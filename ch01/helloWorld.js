/**
 *
 *  title:  ch01 hellowWorld.js
 *  author: isliuwei
 *  time:   2016/09/04/23:27
 *
 */

console.log("Hello World!");


/**
 *  Node.js 平台几种执行js脚本文件的方法
 *
 *  方法一: 控制台终端直接执行 js 脚本文件。
 *         demo:  node helloWorld.js
 *
 *  方法二: 控制台终端以参数方式直接运行。
 *         demo:  node -e "console.log('Hello World')";
 *         node -e,其含义是 eval script,也就是执行脚本语言的意思。调用 eval() 函数,就是计算字符串并执行其中的 Javascript 代码。
 *
 *  方法三: REPL(Read-eval-print Loop)方式
 *         REPL是Nodejs平台的shell交互式编程环境。
 *         REPL(Read-eval-print Loop)表示"输入-求值-输出"循环的含义,如果输入一个函数并回车,那么REPL方式会直接在下面输出这个函数的执行结果和返回值。
 *         其中"undefiend"就是console.log()函数的返回值。
 */