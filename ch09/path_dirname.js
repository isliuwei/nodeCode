/**
 *
 *  title:  ch09 path_dirname.js
 *  author: isliuwei
 *  time:   2016/09/26/14:20:36
 *  intro:  获取文件夹路径
 *
 */

console.info("----------    path dirname    ----------");
console.info();

var path = require('path');

var path_a = "test";
var path_b = "test.txt";
var path_resolve = path.resolve(path_a,path_b);

console.info("path.resolve("+path_a+","+path_b+") is: ");
console.info(path_resolve);

console.info();

console.info('The file test.txt dirname is: ');
console.info(path.dirname(path_resolve));


console.info();
console.info("----------    path dirname    ----------");

