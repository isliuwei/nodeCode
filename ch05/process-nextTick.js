/**
 *
 *  title:  ch05 process-nextTick.js.js
 *  author: isliuwei
 *  time:   2016/09/10/10:20:11
 *  intro:  Process模块的异步方法
 *
 */

console.info("----------    Process nextTick    ----------");
console.info();
/**
 *  使用setTimeout()方法执行异步操作
 */
console.time("startB");
console.log("start - setTimeout");
setTimeout(function(){
    console.log('setTimeout callback');
},0);
console.log("scheduled - setTimeout");
console.timeEnd("startB");

console.info();

/**
 *  使用process.nextTick()方法执行异步操作
 */
console.time("startA");
console.log("start - nextTick");
process.nextTick(function(){
    console.log('nextTick callback');
});
console.log("scheduled - nextTick");
console.timeEnd("startA");
console.info();
console.info("----------    Process nextTick    ----------");

/**
 *  process.nextTick()方法的执行效率高于setTimeout()方法,process.nextTick()几乎没有阻塞
 */