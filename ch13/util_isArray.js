/**
 *
 *  title:  ch13 util_isArray.js
 *  author: isliuwei
 *  time:   2016/09/12/14:53:14
 *  intro:  验证是否是数组
 *
 */

console.info("----------    util isArray    ----------");
console.info();

var util = require("util");

console.log(util.isArray([]));
console.log(util.isArray(new Array(0)));
console.log(util.isArray({}));

console.info();
console.info("----------    util isArray    ----------");
