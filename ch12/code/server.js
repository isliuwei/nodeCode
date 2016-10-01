var http = require('http');
var url = require('url');
var qs = require('querystring');
http.createServer((req,res)=>{

    var statusCodes = (qs.parse(url.parse(req.url).path.substr(1))['statusCodes']);
    if(!http.STATUS_CODES[statusCodes]){
        statusCodes = '404';
    }

    res.writeHeader(statusCodes,{'Content-Type':'text/plain'});

    res.write("Server ----> Client");

    res.end(http.STATUS_CODES[statusCodes]);


}).listen(3000);