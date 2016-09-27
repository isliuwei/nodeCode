

/**
 *      安全的超文本传输协议 HTTPS 提供了一种保证 web 会话私密性的方法。
 *      HTTPS 将 HTTP 和 TLS/SSL 传输层结合到一起。
 *      用 HTTPS 发送的数据是经过加密的。
 *      使用 HTTPS 的前提是,取得一个私钥和一份证书。
 *      私钥可以用来解密客户端给服务器的数据。
 *      私钥保存在服务器上的一个文件里。
 *      生成私钥需要 OpenSSL。
 *      输入下面命令会生成一个名为 key.pem 的私钥文件:
 *      openssl genrsa 1024 > key.pem
 *      还需要一份证书,它包含了公钥和证书持有者信息。
 *      公钥用来加密从客户端发往服务器的数据。
 *      创建证书需要私钥。
 *      输入下面的命令会生成名为 key-cert.pem 的证书:
 *      openssl req -x509 -new -key key.pem > key-cert.pem
 *
 *
 */

/*  HTTPS 服务器配置项    */

var https = require('https');
var fs = require('fs');


/*  作为配置项的SSL秘钥和证书  */
var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./key-cert.pem')
};

https.createServer(options,function(req,res){

/*第一个传入的就是配置项对象 options */

    res.writeHead(200,{'Content-Type': 'text/plain'});

    res.write("hello https");

    res.end();

}).listen(3000);

console.log("Web Server is listening port 3000");






