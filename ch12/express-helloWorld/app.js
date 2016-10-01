/**
 * 加载依赖库
 * @type {*|exports|module.exports}
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * 加载路由控制
 * @type {router|exports|module.exports}
 */

var routes = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var login = require('./routes/login');

/**
 * 创建项目实例
 */

var app = express();

// view engine setup
/**
 * 定义 ejs 模板引擎和模板文件位置,也可以使用 jade h或其他模板引擎
 */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 匹配路径和路由
 */

app.use('/', routes);
app.use('/users', users);
app.use('/about', about);
app.use('/login', login);

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
