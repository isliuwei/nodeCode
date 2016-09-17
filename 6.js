var http = require('http');
/*服务器*/
http.createServer(function(req,res){
    console.log(req);

}).listen(3000);