/**
 *
 *  title:  ch09 path_join.js
 *  author: isliuwei
 *  time:   2016/09/26/13:53:27
 *  intro:  合并字符串路径
 *
 */

console.info("----------    path join    ----------");
console.info();

var path = require('path');



var path_root = 'Users';
var path_user = 'liuwei';
var path_local = 'desktop';
var path_file = 'nodeCode';
var path_char = 'ch09';

console.info('path.join("Users","liuwei","desktop","nodeCode","ch09") is: ' + path.join(path_root,path_user,path_local,path_file,path_char));

console.info();

var path_a = "Users";
var path_b = "liuwei";

console.info('path.join("Users",{},"liuwei") is: ' + path.join(path_a,{},path_b));


console.info();
console.info("----------    path join    ----------");

/**
 * 在使用 path.join() 方法进行合并字符串路径的操作时,其路径参数必须为字符串.
 */
