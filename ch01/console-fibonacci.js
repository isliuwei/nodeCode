/**
 *
 *  title:  ch01 console-fibonacci.js
 *  author: isliuwei
 *  time:   2016/09/06/18:22:22
 *  intro:  斐波那契(Fibonacci)数列应用
 *
 *
 */

console.info("\n");
console.info("----------    Fibonacci数列应用   ----------");
console.info("\n");
var FibonacciArr;
var fib1 = 1, fib2 = 1, fib3 = fib1 + fib2;
FibonacciArr = "斐波那契(Fibonacci)数列 >>> 1  1  ";
while(fib3 <= 1000)
{
    FibonacciArr = FibonacciArr + fib3 + "  ";
    fib1 = fib2;
    fib2 = fib3;
    fib3 = fib1 + fib2;
}

console.info(FibonacciArr);
console.info("\n");
