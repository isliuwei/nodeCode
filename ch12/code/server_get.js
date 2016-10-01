
var http = require('http');
var url = require('url');
var qs = require('querystring');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type': 'text/plain'});
    var query = url.parse(req.url).query;
    console.info();
    console.log(query);
    console.info();

    var qs_parse = qs.parse(query);
    console.log(qs_parse);
    console.info();

    res.end(JSON.stringify(qs_parse));


}).listen(3000);
