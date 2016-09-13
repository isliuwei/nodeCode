/**
 *
 *  title:  ch13 util_isError.js
 *  author: isliuwei
 *  time:   2016/09/12/15:03:49
 *  intro:  验证是否为错误类型
 *
 */

console.info("----------    util isError    ----------");
console.info();

var util = require("util");

console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({}));

console.info();
console.info("----------    util isError    ----------");