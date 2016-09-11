
var fib = function(n)
{
    if(n<=1)
    {
        return 1;
    }
    else
    {
        return fib(n-2)+fib(n-1);
    }
}

process.on('message',function(mes){
    process.send({result: fib(mes.input)});
});