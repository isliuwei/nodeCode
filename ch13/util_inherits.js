/**
 *
 *  title:  ch13 util_inherits.js
 *  author: isliuwei
 *  time:   2016/09/12/00:01:31
 *  intro:  原型对象继承
 *
 */

console.info("----------    util inherits    ----------");
console.info();
var util = require("util");
console.log("util.inherits()方法实现原型继承。\n"
    +"语法:  util.inherits(constructor,superConstructor)  \n"
    +"其中,第一个参数 constructor 用于定义继承的类对象(子类),第二个参数 superConstructor 参数用于定义被继承的类对象(父/基类)。\n");

/**
 *      定义原型基类  Base
 *      @constructor
 */

function Base()
{
    this.name = "base";
    this.year = "2016";
    this.sayHello = function()
    {
        console.log(`Hello ${this.name},this is ${this.year}`);
    }
}


/**
 *      定义原型基类  Base 的方法 showName()
 */

Base.prototype.showName = function()
{
    console.log(this.name);
}

/**
 *      定义原型基类  Base 的方法 showYear()
 */

Base.prototype.showYear = function()
{
    console.log(this.year);
}

/**
 *      定义原型子类  Child
 *      @constructor
 */

function Child()
{
    this.name = "child";
}

/**
 *      调用 util.inherits() 方法实现原型对象继承
 *      @constructor
 */

/**
 *
 *      util.inherits(constructor, superConstructor)
 *      Inherit the prototype methods from one constructor into another.
 *      The prototype of constructor will be set to a new object created from superConstructor.
 *
 */

util.inherits(Child,Base);

Child.prototype.childMethod = function()
{
    console.log("child method");
}

/**
 *      定义基类  Base 对象
 *      @type {Base}
 */

var BaseObj = new Base();
BaseObj.showName();
BaseObj.showYear();
BaseObj.sayHello();
console.log(BaseObj);


/**
 *      定义基类  Child 对象
 *      @type {Child}
 */

var ChildObj = new Child();
ChildObj.showName();
ChildObj.showYear();
console.log(ChildObj);

console.info();
console.info("----------    util inherits    ----------");









