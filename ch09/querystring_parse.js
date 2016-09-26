/**
 *
 *  title:  ch09 querystring_parse.js
 *  author: isliuwei
 *  time:   2016/09/26/15:01:10
 *  intro:  url 参数转换成 url对象
 *
 */

console.info("----------    querystring parse    ----------");
console.info();

var url = require('url');
var querystring = require('querystring');

var urlString = "http://localhost:3000/index?user=liuwei&pc=macPro&os=macOSsierra";

var urlObject = url.parse(urlString);

console.info(urlObject);

var urlQueryString = urlObject.query;

console.info(urlQueryString);

var urlQueryObject = querystring.parse(urlQueryString);

console.info(urlQueryObject);
console.info(urlQueryObject.user);
console.info(urlQueryObject.pc);
console.info(urlQueryObject.os);

console.info();
console.info("----------    querystring parse    ----------");




