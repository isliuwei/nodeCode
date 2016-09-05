var http = require('http');

http.createServer(function(req,res){

	//res.writeHead(200,{'Content-type':'text/plain'});
	res.writeHead(200,{'Content-type':'text/html'});

	//res.end("Hello Nodejs!");

	//res.end("<h1 style='color: #f00;'>Hello Nodejs!</h1>");

	res.write('hello world! 欢迎来到Nodejs世界','utf-8');

	res.end();

}).listen(3000);

console.log("Web Server is listening port 3000");
