/**
 *
 *  title:  ch13 util_isDate.js
 *  author: isliuwei
 *  time:   2016/09/12/14:56:32
 *  intro:  验证是否为日期格式
 *
 */

console.info("----------    util isDate    ----------");
console.info();

var util = require("util");

console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate({}));

console.info();
console.info("----------    util isDate    ----------");