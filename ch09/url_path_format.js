/**
 *
 *  title:  ch09 url_path_format.js
 *  author: isliuwei
 *  time:   2016/09/26/14:38:15
 *  intro:  解析与格式化url路径
 *
 */

console.info("----------    url path format    ----------");
console.info();

var url = require('url');

var urlString = "http://localhost:3000/index?user=liuwei&pc=macPro&os=macOSsierra";

var urlObject = url.parse(urlString);

console.info('typeof urlObject is : ' + typeof urlObject);
console.info();


console.info('urlString is : ' + urlString);
console.info('url.parse("urlString") is: ');
console.info(urlObject);
console.info();

var urlObj = {
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'www.baidu.com',
        port: null,
        hostname: 'www.baidu.com',
        hash: null,
        search: '?name=lisi&age=23',
        query: 'name=lisi&age=23',
        pathname: '/',
        path: '/?name=lisi&age=23',
        href: 'http://www.baidu.com/?name=lisi&age=23'
};

console.info(urlObj);
console.info('url.format("urlObj") is:');
var urlFormat = url.format(urlObj);
console.info(urlFormat);


console.info();
console.info("----------    url path format    ----------");

