var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');       //提供默认的 favicon
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var photos = require('./routes/photos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));    //视图views文件的查找目录 __dirname全局变量,用来确定当前运行的文件所在的目录 process.cwd
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));                                             //输出有颜色区分的日志,以便于开发调试
app.use(bodyParser.json());                                         //解析请求主体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));            //提供 ./public 下的静态文件

/*设定照片上传目的地址的定制配置项*/
//app.set('photos', path.join(__dirname, '/public/photos'));






/**
 * 指定程序路由
 */

app.use('/', routes);
app.use('/users', users);
app.use('/photos', photos);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
