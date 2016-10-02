var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
rl.setPrompt('myshell> ');
rl.prompt();
rl.on('line',(input) => {
    var shell = input.trim();
    switch(shell) {
        case '-h':
            console.log('-h --- 帮助命令\n-i --- 关于shell\n-v --- 版本信息\n-c --- 关闭shell');
            break;
        case '-i':
            console.log('myshell from isliuwei!');
            break;
        case '-v':
            console.log('version: 2.0.0');
            break;
        case '-c':
            console.log('You will close my shell!');
            rl.close();
            break;
        default:
            console.log('Thanks using my shell!');
    }
    //rl.close();
});

/*
rl.question("What's your name?",function(answer){
    console.log("My Name is",answer);
    rl.close();
});
*/

/*
rl.on('line', (input) => {
    console.log(`Received: ${input}`);
});
*/
/*
rl.on('line',function(data){
    console.log("data:"+data);
    rl.close();
});
*/
/*
rl.setPrompt('NodeJS shell >');
rl.prompt();
rl.on('line',(data) => {
    console.log(`your data is:${data}`);
    rl.close();
});
*/
/*
const readline = require('readline');
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
    switch(line.trim()) {
case 'hello':
    console.log('world!');
    break;
default:
    console.log(`Say what? I might have heard '${line.trim()}'`);
    break;
}
rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
process.exit(0);
});
*/