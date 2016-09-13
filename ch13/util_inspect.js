/**
 *
 *  title:  ch13 util_inspect.js
 *  author: isliuwei
 *  time:   2016/09/12/14:31:59
 *  intro:  将任意对象转换为字符串
 *
 */

console.info("----------    util inspect    ----------");
console.info();

var util = require("util");

function Person()
{
    this.name = "Person";
    this.toString = function(){
        return this.name;
    };
}

var objPerson = new Person();
console.log(util.inspect(objPerson));
console.log(util.inspect(objPerson,{ showHidden: true, depth: null,colors: true }));
var iNumber = 1234;
var iBoolean = true;
var iString = "string";
var iDate = new Date();
var iRegExp = /[A-Za-z]/;
var iNull = null;
var iUndefiend = undefined;
var iFunction = function(){return;};
var iObject = {name:'lisi',age:23};
console.log(util.inspect(iNumber,{ colors: true }));
console.log(util.inspect(iBoolean,{ colors: true }));
console.log(util.inspect(iString,{ colors: true }));
console.log(util.inspect(iDate,{ colors: true }));
console.log(util.inspect(iRegExp,{ colors: true }));
console.log(util.inspect(iNull,{ colors: true }));
console.log(util.inspect(iUndefiend,{ colors: true }));
console.log(util.inspect(iFunction,{ colors: true }));
console.log(util.inspect(iObject,{ colors: true }));

console.info();
console.info("----------    util inspect    ----------");




/**
 * console.dir()  底层调用了  util.inspect()
 */




