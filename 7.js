
/*  基于原型的继承  */

/*
function ClassA(name,age)
{
    this.name = name;
    this.age = age;
    this.sayAge  = function()
    {
        console.log(this.age);
    }
}

ClassA.prototype.sayName = function()
{
    console.log(this.name);
}

function ClassB(name,age,sex)
{
    ClassA.call(this,name,age);
    this.sex = sex;

}

ClassB.prototype = new ClassA();

ClassB.prototype.saySex = function()
{
    console.log(this.sex);
}

ClassB.prototype.constructor = ClassB;

var objA = new ClassA("ClassA",10);
objA.sayAge();
objA.sayName();
console.log(objA.constructor);


var objB = new ClassB("ClassB",1,"male");
objB.sayAge();
objB.sayName();
objB.saySex();
console.log(objB.constructor);
*/


/*  基于ES6的继承  */
/*
class Super{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayName(){
        console.log(this.name);
    }

    sayAge(){
        console.log(this.age);
    }

    static _showAttr(){
        console.log("This is a Super class!");
    }

}

class Sub extends Super{

    constructor(name,age,sex){
        super(name,age);
        this.sex = sex;
    }

    saySex(){
        console.log(this.sex);
    }

    static _showAttr(){
        console.log("This is a Sub class extends Super Class!");
    }
}

var objSuper = new Super("Super",10);
Super._showAttr();
objSuper.sayName();
objSuper.sayAge();
var objSub = new Sub("Sub",1,"male");
Sub._showAttr();
objSub.sayName();
objSub.sayAge();
objSub.saySex();
*/

/*  基于Node.js util.inherits 的继承  */
/*
function Super(name,age,xx)
{
    this.name = name;
    this.age = age;
    this.private = "private";
}

Super.prototype.sayName = function()
{
    console.log(this.name);
}

Super.prototype.sayAge = function()
{
    console.log(this.age);
}

Super.prototype.public = "public";


var util = require("util");

function Sub(name,age,sex)
{
    this.name = name;
    this.age = age;
    this.sex = sex;
}

util.inherits(Sub,Super);

Sub.prototype.saySex = function()
{
    console.log(this.sex);
}

var objSub = new Sub("sub",1,"male");
objSub.sayName();
objSub.sayAge();
objSub.saySex();
console.log(objSub.private);
console.log(objSub.public);
*/




