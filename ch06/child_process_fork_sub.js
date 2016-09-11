

//main process message
process.on('message',function(mes){
    console.log(mes.main);
});


//sub send message to main
process.send({sub:"sub process send message to main process!"});