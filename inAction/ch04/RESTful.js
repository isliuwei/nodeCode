/**
 * Created by liuwei on 16/9/19.
 */


var http = require("http");
var url = require("url");
var items = [];

var server = http.createServer(function(req,res){
    switch(req.method){
        
        case 'POST':
            var item = "";
            req.setEncoding("utf8");
            req.on("data",function(chunk){
                item+=chunk;
            });
            req.on("end",function(){
                items.push(item);
                res.end("OK\n");
            });
            break;

        /*
        case 'GET':
            items.forEach(function(item,index,array){
                res.write(index + " ) " + item + "\n");
            });
            res.end();
            break;
        */

        case 'GET':
            var body = items.map(function(item,index,array){
                return index + " ) " + item;
            }).join("\n");
            res.setHeader("Content-Length", Buffer.byteLength(body));
            res.setHeader("Content-Type", "text/plain; charset='utf-8'");
            res.end(body);
            break;

        case 'DELETE':
            var path = url.parse(req.url).pathname;
            var index = parseInt(path.slice(1),10);

            if(isNaN(index)){
                res.statusCode = 400;
                res.end("Invalid item id");
            }else if(!item[index]){
                res.statusCode = 404;
                res.end("Item not found");
            }else{
                items.splice(index,1);
                res.end("OK\n");
            }

            break;
    }
});


server.listen(3000);
console.log("Web Server is listening port 3000!");





