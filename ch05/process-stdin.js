/**
 *
 *  title:  ch05 process-stdin.js
 *  author: isliuwei
 *  time:   2016/09/10/10:04:15
 *  intro:  实现标准输入流
 *
 */


console.info("----------    Process stdin    ----------");
console.info();
console.info("用户输入数据:");

/**
 *  readable - 接受控制台用户输入事件
 */

/*设置输入编码*/
process.stdin.setEncoding("utf8");
process.stdin.on('readable',() =>{
    var chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write("Print Data:" + chunk +"\n");
    }
});


/**
 *  end - 结束控制台输入事件
 */

process.stdin.on('end',() =>{
    process.stdout.write("end.\n");

});



/*设置输入编码*/
/*
process.stdin.setEncoding("utf8");
process.stdin.on('readable',function(){
    var chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write("Print Data:" + chunk +"\n");
    }
});
*/


/**
 *  end - 结束控制台输入事件
 */
/*
process.stdin.on('end',function(){
    process.stdout.write("end.\n");

});
*/

console.info();
console.info("----------    Process stdin    ----------");


