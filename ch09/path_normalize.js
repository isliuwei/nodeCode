/**
 *
 *  title:  ch09 path_normalize.js
 *  author: isliuwei
 *  time:   2016/09/26/13:35:35
 *  intro:  规范化字符串路径
 *
 */

console.info("----------    path normalize    ----------");
console.info();

//引入路径处理模块
var path = require('path');

/**
 *  测试 path.normalize() 方法
 */

var path_a = "/Users//liuwei";
console.info('path.normalize('+path_a+') is: ' + path.normalize(path_a));
console.info();

var path_b = "/Users//liuwei/";
console.info('path.normalize('+path_b+') is: ' + path.normalize(path_b));
console.info();

var path_c = "/Users///liuwei//";
console.info('path.normalize('+path_c+') is: ' + path.normalize(path_c));
console.info();

var path_d = "/Users/liuwei/.";
console.info('path.normalize('+path_d+') is: ' + path.normalize(path_d));
console.info();

var path_e = "/Users/liuwei//.";
console.info('path.normalize('+path_e+') is: ' + path.normalize(path_e));
console.info();

var path_f = "/Users/liuwei//.abc";
console.info('path.normalize('+path_f+') is: ' + path.normalize(path_f));
console.info();

var path_f1 = "/Users/liuwei//../abc";
console.info('path.normalize('+path_f1+') is: ' + path.normalize(path_f1));
console.info();

var path_g = "/Users/liuwei//..";
console.info('path.normalize('+path_g+') is: ' + path.normalize(path_g));
console.info();

var path_h = "/Users/liuwei//..abc";
console.info('path.normalize('+path_h+') is: ' + path.normalize(path_h));
console.info();

var path_i = "/Users/liuwei/../..";
console.info('path.normalize('+path_i+') is: ' + path.normalize(path_i));
console.info();

var path_j = "/Users/liuwei//..//..";
console.info('path.normalize('+path_j+') is: ' + path.normalize(path_j));
console.info();



console.info();
console.info("----------    path normalize    ----------");

/**
 *  字符串路径结尾处含有 " /.. " 字符的,在使用 path.normalize() 方法规范化输出后,均会跳转至上一级目录,如果连续使用则会连续向上一级跳转.
 */





