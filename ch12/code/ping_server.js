var http = require('http');

http.createServer((req,res)=>{
    if(Math.round(Math.random())){
        res.writeHead(200,{'Content-Type':'text/html'});
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
    }
    res.end();
}).listen(6868);