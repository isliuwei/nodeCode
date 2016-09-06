/**
 *
 *  title:  ch01 obj-dir.js
 *  author: isliuwei
 *  time:   2016/09/06/18:59:37
 *  intro:  查看Node.js对象的属性和方法
 *
 */

/**
 *
 *  在Node.js平台下,可以使用 console.dir()方法实现快速查看对象实例所包含属性和方法。
 *
 */

console.dir(1234);
console.dir("Node.js");
console.dir(null);
console.dir(true);
console.dir(["Welcome","to","Node.js","world"]);
console.dir({"OS":"Mac","API":"Node.js"});
console.dir(console);

/**
 *
 *  console.dir()方法实际上在底层是通过对obj对象使用  util.inspect() 方法、并将结果字符输出到stdout来实现的。
 *  下面是util.inspect(object)的示例
 *
 */
var util = require("util");
console.log(util.inspect(console));
console.log(util.inspect({"OS":"Mac","API":"Node.js"}));
console.log(util.inspect(["Welcome","to","Node.js","world"]));
console.log(util.inspect(true));
var person = {
    name: 'lisi',
    age: '23',
    borther:{
        name:'zhangsan',
        age:'20',
        birth:'Anhui'
    }
};
console.log(util.inspect(person));




