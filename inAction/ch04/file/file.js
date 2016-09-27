var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    switch  (req.method){
        case 'GET':
            show(req,res);
            break;
        case 'POST':
            upload(req,res);
            break;
    }
});

server.listen(3000);
console.log("Web Server is listening port 3000");


/*启动Socket IO 服务器,将其搭载在我们已经创建的 HTTP 服务器 server 上*/
var io = require('socket.io')(server);


function show(req,res){
     html = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>upload file</title>
                </head>
                <body>
                <form action="/" method="post" enctype="multipart/form-data">
                    <p><input type="text" name="name" /></p>
                    <p><input type="file" name="file" /></p>
                    <p><input type="submit" value="Upload" /></p>
                    <p id="progress"></p>
                </form>
                <script type="text/javascript" src="/socket.io/socket.io.js"></script>
                <script type="text/javascript">

                  var socket = io.connect();
                  var progress = document.getElementById("progress");
                  socket.on('progress', function (data) {
                    progress.innerHTML = "上传进度: "+ data.percent + "%";
                    //console.log(data);
                  });
                </script>
                </body>
                </html>`;


    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html));
    res.end(html);
}

var formidable = require('formidable');

function isFormData(req){
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}

function upload(req,res){
    if(!isFormData(req)){
        res.statusCode = 400;
        res.setHeader('Content-Type','text/plain');
        res.end('Error 400: Bad Request');
    }

    var form = new formidable.IncomingForm();

    /*设置文件上传路径  绝对路径*/
    form.uploadDir = "/Users/liuwei/Desktop/nodeCode/inAction/ch04/file/tmp";

    //form.parse(req);

    /*
    form.on('field',function(field, value){
        console.log(field);
        console.log(value);
    });

    form.on('file',function(name, file){
        console.log(field);
        console.log(value);
    });

    form.on('end',function(){
        res.end('upload complete!');
    });

    form.parse(req);
    */

    form.parse(req, function(err,fields,files){

        //console.log(fields);
        //console.log(files);

        var fileTypeArr = files.file.name.split('.');
        var fileType = fileTypeArr[fileTypeArr.length-1];

        var date = new Date();
        var ms = Date.parse(date);
        fs.renameSync(files.file.path, form.uploadDir +"/"+ ms +"." + fileType);

        res.end('upload complete!');

    });

    form.on('progress',function(bytesReceived, bytesExpected){
        /*参数的单位字节数*/
        percent = Math.floor( bytesReceived / bytesExpected * 100);
        //console.log( percent + "%");

        io.emit('progress', { percent: percent });

    });


}



