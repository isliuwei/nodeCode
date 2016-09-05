var http = require('http');
var fs = require('fs');
var tpl = "";
fs.readFile('demo.html','utf-8',function(err,data){
	tpl = data;
});

http.createServer(function(req,res){
	res.writeHead(200, {'Content-type':'text/html'});
	res.end(tpl);

}).listen(3000);

console.log("Web Server is listening port 3000");
