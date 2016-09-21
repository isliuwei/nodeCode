/**
 *
 *  title:  ch01 console-factorial.js
 *  author: isliuwei
 *  time:   2016/09/06/20:08:22
 *  intro:  阶乘运算输出
 *
 */

console.info("\n");
console.info("----------    阶乘计算    ----------");
console.info("\n");
var iNum,iFactorial = 1;
var strFactorial;

var readline = require("readline");
var rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

/*error
rl.question("请输入阶乘运算起始数值\nn=",(iNum)=>{
    console.log(((iNum)=>{iNum===1?1:iNum*arguments.callee(iNum-1)})(iNum));
    rl.close();
});
*/


rl.question("请输入阶乘运算起始数值\nn=",(iNum)=>{
    console.log(
        (function(iNum){
            if(iNum === 1)
            {
                return 1;
            }else{
                return iNum*arguments.callee(iNum-1);
            }
        })(iNum)
    );
    rl.close();
});
