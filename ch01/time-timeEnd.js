/**
 *
 *  title:  ch01 time-timeEnd.js
 *  author: isliuwei
 *  time:   2016/09/06/19:12:03
 *  intro:  时间计数器应用
 *
 */

function uniqueMethod1(array)
{
    return array.filter(function(item,index,array){
        return array.indexOf(item) === index;
    });
}

function uniqueMethod2(array)
{
    var uniqueArr = [];
    var hash = {};
    for(var i=0; i<array.length; i++)
    {
        if(!hash[array[i]])
        {
            hash[array[i]] = true;
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
}

function createRandomArray(num)
{
    var arr = [];
    for(var i=0; i<num; i++)
    {
        arr.push(~~(Math.random()*num));
    }

    return arr;
}

var arr = createRandomArray(10);

//var arr = [1,1,1,1,2,2,2,2,2,3,4,5,5,5,5];

console.info("\n");
console.info("----------*****   比较两种数组去重方法的执行速度   *****----------");
console.info("\n");
console.time('uniqueMethod1 -- hashTable took');
var uniqueArr1 = uniqueMethod1(arr);
console.log(uniqueMethod1(arr));
console.timeEnd('uniqueMethod1 -- hashTale took');

console.info("\n");

console.time('uniqueMethod2 -- indexOf took');
var uniqueArr2 = uniqueMethod2(arr);
console.log(uniqueMethod2(arr));
console.timeEnd('uniqueMethod2 -- indexOf took');

console.info("\n");


/**
 *
 *  关于 console.time() 方法如下:
 *  语法:
 *      console.time(label);        //make a time begin
 *
 *      ......需要计算执行速度的代码块
 *
 *      console.timeEnd(label);     //finish timer, record output
 *
 *      其中label参数可以是任何字符串,但是必须相同,结果输出的单位为毫秒数
 *
 */
