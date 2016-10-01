var http = require('http');


var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST'
};


var clientRequest = http.request(options,function(res){

    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log('BODY: ' + chunk);
    });
});

clientRequest.on('error',function(e){
    console.log('problem with clientRequest: '+ e.message);
});


clientRequest.write('data\n');
clientRequest.end();