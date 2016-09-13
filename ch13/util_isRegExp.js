/**
 *
 *  title:  ch13 util_isRegExp.js
 *  author: isliuwei
 *  time:   2016/09/12/14:58:36
 *  intro:  验证是否为正则表达式
 *
 */

console.info("----------    util isRegExp    ----------");
console.info();

var util = require("util");

console.log(util.isRegExp(/A-Za-z/));
console.log(util.isRegExp(new RegExp(/A-Za-z/)));
console.log(util.isRegExp({}));

console.info();
console.info("----------    util isRegExp    ----------");