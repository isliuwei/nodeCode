/**
 * Created by liuwei on 16/9/19.
 * 构建 RESTful Web服务
 * 资料汇总:
 * ①    http://www.ruanyifeng.com/blog/2011/09/restful.html
 * ②    https://nodejust.com/node-js-restful-api-tutorial/zh-cn/
 * ③    https://zh.wikipedia.org/zh/REST
 *
 *
 *
 *
 */

/**
 * 用 POST 请求创建资源
 * 在 RESTful 中,资源的创建是由谓词 POST 实现的.
 * 当 Node 的HTTP服务器读入并解析请求数据时,它会将数据做成data事件的形式,把解析好的数据块放入其中,等待程序处理.
 */
var http = require("http");
var server = http.createServer(function(req,res){

    /*只要读入了新的数据块,就会触发data事件*/
    /*调用req.setEncoding(encoding)设置编码格式,将二进制数据转换成utf-8或ascii格式*/
    req.setEncoding("utf8");
    req.on('data',function(chunk){
        /*数据块默认是个Buffer对象(字节数组)*/
        console.log('parsed',chunk);
    });

    /*数据全部读完之后触发end事件*/
    req.on('end',function(){
        console.log("done parsing");
        res.end();
    });
});
