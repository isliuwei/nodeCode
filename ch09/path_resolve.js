/**
 *
 *  title:  ch09 path_resolve.js
 *  author: isliuwei
 *  time:   2016/09/26/14:04:34
 *  intro:  解析绝对路径
 *
 */

console.info("----------    path resolve    ----------");
console.info();

var path = require('path');

console.info("Current working directory: ");
console.info(process.cwd());
console.info();

var path_a = "path_resolve.js";

console.info("path.resolve("+path_a+") is: ");
console.info(path.resolve(path_a));
console.info(__dirname);
console.info("process.cwd() == __dirname?",process.cwd() == __dirname);

console.info();

var path_b = "test";
var path_c = "test.txt";

console.info("path.resolve("+path_b+","+path_c+") is: ");
console.info(path.resolve(path_b,path_c));


console.info();
console.info("----------    path resolve    ----------");



