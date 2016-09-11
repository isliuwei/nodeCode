/**
 *
 *  title:  ch05 process-stdout.js
 *  author: isliuwei
 *  time:   2016/09/10/09:31:16
 *  intro:  实现标准输出流 -- p-stdout
 *
 */

console.info("----------    Process Stdout    ----------");
console.info();
console.log("Node.js Process Module - stdout method.");
process.stdout.write("Node.js Process Module - stdout method -- process.stdout.write(string).");
console.info("\n");
console.log("console.log()和console.info()方法实际上是通过封装Process模块的stdout.write()方法来实现标准的输出");
console.info("\n");
console.info("console.log = function(string)\n"+
             "{\n"+
                "process.stdout.write('process.stdout.write:' + string + '\\n');\n"+
             "}");
console.info("\n");
console.log = function(string)
{
    process.stdout.write('process.stdout.write:' + string +'\n');
}
console.log("Node.js Process Module - stdout method.");
console.info();
console.info("----------    Process Stdout    ----------");









console.info();
console.info("----------    Process Stdout    ----------");