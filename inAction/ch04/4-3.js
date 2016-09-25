


var http = require('http');
var https = require('https');
var parse = require('url').parse;
var join = require('path').join;
var keyPath = './https/key.pem';
var certPath = './https/key-cert.pem';
var fs = require('fs');

var root = __dirname;

/*
var options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
};

var server = https.createServer(options,function(req,res){

    var url = parse(req.url);
    var path = join(root,url.pathname);

    fs.stat(path,function(err,stat){
        if(err){
            if('ENOENT' == err.code){
                res.statusCode = 404;
                res.end('Error 404: Not Found!');
            }else{
                res.statusCode = 500;
                res.end('Error 500: Internal Server Error! ');
            }
        }else{
            res.setHeader('Content-Length',stat.size);

            var stream = fs.createReadStream(path,{encoding:'utf8'});

            stream.pipe(res);

            stream.on('error',function(err){
                res.statusCode = 500;
                res.end('Error 500: Internal Server Error! ');
            });
        }
    });

});

*/

var server = http.createServer(function(req,res){

    var url = parse(req.url);
    var path = join(root,url.pathname);

    if(url.pathname === '/'){

        res.end("index");

    }else{

        fs.stat(path,function(err,stat){
            if(err){
                if('ENOENT' == err.code){
                    res.statusCode = 404;
                    res.end('Error 404: Not Found!');
                }else{
                    res.statusCode = 500;
                    res.end('Error 500: Internal Server Error! ');
                }
            }else{
                res.setHeader('Content-Length',stat.size);

                var stream = fs.createReadStream(path,{encoding:'utf8'});

                stream.pipe(res);

                stream.on('error',function(err){
                    res.statusCode = 500;
                    res.end('Error 500: Internal Server Error! ');
                });
            }
        });
    }
});

server.listen(3000);
console.log("Web Server is listening port 3000");
