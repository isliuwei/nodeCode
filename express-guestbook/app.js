/**
 *  引入所有你需要的模块
 */

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');


/**
 *  创建一个 Express app
 */

var app = new express();


/**
 *
 *  模板引擎设置
 *  Express视图存在一个views文件中
 *  视图将使用EJS引擎
 *
 */

app.set('views', path.resolve(__dirname,'views'));
app.set('view engine','ejs');


/**
 *  中间件配置
 *  日志中间件  morgan
 *  请求体解析中间件  body-parser
 */


app.use(logger('dev'));                                            //   使用Morgan来记录每次request请求
app.use(bodyParser.urlencoded({ extended: false }));               //   填充一个req.body变量如果用户提交了表单的话（扩展项是必须的）

/**
 *  express.static
 *  静态资源加载配置项
 */

var publicPath = path.resolve(__dirname, 'public');                 //  使用Node的path模块设置public的路径
app.use(express.static(publicPath));                                //  从publicPath目录发送静态文件



// 创建一个全局的数组用于储存所有的条目
var entries = [];
// 使这个条目数组可以在所有视图中访问
app.locals.entries = entries;


// 当访问了网站根目录，就渲染主页（位于views/index.ejs）
app.get('/',function(req,res){
    res.render('index');
});

// 渲染“新条目”页面（位于views/index.ejs）当get访问这个URL的时候
app.get("/new-entry", function(req, res) {
    res.render("new-entry");
});


// 定义一个路由处理，当你POST到“new-entry”这个URL的时候与GET形成一个鲜明的对比
app.post("/new-entry", function(req, res) {
    // 如果用户提交的表单没有标题或者内容，则返回一个400的错误
    if (!req.body.title || !req.body.content) {
        res.status(400).send("Entries must have a title and a body.");
        return;
    }
    // 添加一个新的条目到entries
    entries.push({
        title: req.body.title,
        content: req.body.content,
        published: new Date()
    });
    // 重定向到主页来查看你的新条目
    res.redirect("/");
});



// 渲染404页面，因为你请求了未知资源
app.use(function(req,res,next){
    res.status(404).render("404");
});

app.listen(3000);

console.log('webserver is started on port 3000...');








