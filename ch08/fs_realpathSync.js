/**
 *
 *  title:  ch08 realpathSync.js
 *  author: isliuwei
 *  time:   2016/09/15/10:36:13
 *  intro:  相对路径转绝对路径
 *
 */

console.info("----------    fs realpathSync    ----------");
console.info();

var fs = require("fs");
//var cache = {'/liuwei':'/Users/liuwei'};
var realpath = 'txt/realpathSync.txt';
//var resolvedPath = fs.realpathSync(realpath,cache);
var resolvedPath = fs.realpathSync(realpath);
console.info("txt/realpathSync.txt realpaht is: ");
console.info(resolvedPath);

console.info();
console.info("----------    fs realpathSync    ----------");
