var http = require('http');
urls = ['www.baidu.com','www.qq.com','www.taobao.com'];
function fetchPage(url){
    console.time('Request took');
    //var start = new Date();
    http.get({host:url},function(res){
        console.log("Got respones from:"+url);
        //console.log("Request took:",new Date() - start+"ms");
        console.timeEnd('Request took');

    });


    //console.timeEnd('url');
}


for(var i=0; i<urls.length; i++){
    fetchPage(urls[i]);
}