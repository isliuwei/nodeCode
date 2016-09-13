/**
 *
 *  title:  ch13 util_format.js
 *  author: isliuwei
 *  time:   2016/09/12/15:11:51
 *  intro:  格式化字符
 *
 */

console.info("----------    util format    ----------");
console.info();

var util = require("util");

console.info(util.format("%s:%s",'foo'));
console.info(util.format("%s:%s",'foo','bar','baz'));
console.info(util.format(1,2,3));


console.info();
console.info("----------    util format    ----------");
