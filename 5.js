//var util = require("util");
//console.log(util);



function Animal(name,age)
{
    this.name = name;
    this.age = age;
}

Animal.prototype.sayName = function()
{
    return this.name;
}

function Cat(name,age,sex)
{
    Animal.call(this,name,age);
    this.sex = sex;
}


Cat.prototype = new Animal();

Cat.prototype.saySex = function()
{
    return this.sex;
}
var mimiCat = new Cat('mimi',3,'female');
console.log(mimiCat.constructor);
Cat.prototype.constructor = Cat;
console.log(mimiCat.constructor);
console.log(mimiCat.saySex());
console.log(mimiCat.sayName());
console.log(mimiCat);

