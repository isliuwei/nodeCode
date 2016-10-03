/**
 *
 *  title:  ch03 asyn-basic.js
 *  author: isliuwei
 *  time:   2016/10/03/16:17:50
 *  intro:  Node.js 框架异步机制基础
 *
 */

console.info("----------    Node.js 异步编程: 基础起步    ----------");
console.info();

// 使用 setTimeout() 异步方法初探异步机制

setTimeout(function(){
    console.log('Async - Print now!');
    console.info();
},3000);

console.log('Async - Print it 3 second later!');
console.info();
console.info("----------    Node.js 异步编程    ----------");
console.info();




