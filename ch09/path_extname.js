/**
 *
 *  title:  ch09 path_extname.js
 *  author: isliuwei
 *  time:   2016/09/26/14:32:16
 *  intro:  获取路径中文件扩展名
 *
 */

console.info("----------    path extname    ----------");
console.info();

var path = require('path');

var path_a = "test";
var path_b = "test.txt";

var path_resolve = path.resolve(path_a,path_b);

console.info("path.resolve("+path_a+","+path_b+") is: ");
console.info(path_resolve);

console.info();

console.info('path.extname("test.txt") is: ');
console.info(path.extname(path_resolve));

console.info();
console.info("----------    path extname    ----------");
