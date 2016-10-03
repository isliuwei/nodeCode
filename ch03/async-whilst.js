/**
 *
 *  title:  ch03 async-whilst.js
 *  author: isliuwei
 *  time:   2016/10/03/17:26:54
 *  intro:  Async 循环流程控制
 *
 */

console.info("----------    Node.js 异步编程: Async whilst doWhilst    ----------");
console.info();

var async = require('async');

var count = 0;

var list = [
    {name: 'apple', age:'1000'},
    {name: 'mac', age:'9088'},
    {name: 'iphone', age:'7898'},
    {name: 'ipad', age:'2298'},
    {name: 'iwatch', age:'2268'}
];

async.whilst(
    function(){
        return count < 5;
    },
    function(callback){
        console.log(count);
        list[count].age += 1;
        count++;
        setTimeout(callback,1000);
    },
    function(err){
        console.log(count);
        console.log(list);
    }
);





var temp = 0;

var sheet = [
    {name: 'apple', age:'1000'},
    {name: 'mac', age:'9088'},
    {name: 'iphone', age:'7898'},
    {name: 'ipad', age:'2298'},
    {name: 'iwatch', age:'2268'}
];

async.doWhilst(
    function(callback){
        console.log(temp);
        sheet[temp].age += 1;
        temp++;
        setTimeout(callback,1000);
    },
    function(){
        return temp < 5;
    },
    function(err){
        console.log(count);
        console.log(list);
    }
);


console.info();
console.info("----------    Node.js 异步编程: Async parallelLimit    ----------");
