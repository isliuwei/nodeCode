#Express 框架

### Express 项目目录结构
    * bin  用于存放启动项目的脚本文件
    * node_module  存放所有的项目依赖库
    * public  用于存放静态文件(css、js、img等)
    * routes  用于存放路由文件(类似于 MVC 模型中的控制器 controller 概念)
    * views  用于存放页面文件(ejs模板)
    * package.json  项目依赖配置即开发者信息
    * app.js  应用核心配置文件
    
### 详解工程中的文件

#### *package.json 文件用于定义项目依赖配置以及开发者信息,是整个工程首先需要关注的文件

    {
      "name": "express-helloWorld",
      "version": "0.0.0",
      "private": true,
      "scripts": {
        "start": "node ./bin/www"
      },
      "dependencies": {
        "body-parser": "~1.15.1",
        "cookie-parser": "~1.4.3",
        "debug": "~2.2.0",
        "ejs": "~2.4.1",
        "express": "~4.13.4",
        "morgan": "~1.7.0",
        "serve-favicon": "~2.3.0"
      }
    }

* name 属性用于定义项目名称
* version 属性用于定义版本号
* scripts 属性用于定义操作命令,其可以非常方便地增加启动命令,
  比如默认的 start 参数,如使用 `npm start` 命令则代表执行 `node ./bin/www` 命令
* dependencies 属性用于定义依赖库

#### * app.js 应用核心配置文件
  
    /**
     *  加载依赖库
     */
     
    var express = require('express');            
    var path = require('path');
    var favicon = require('serve-favicon');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');        // cookieParser() 解析 HTTP cookie
    var bodyParser = require('body-parser');            // bodyParser() 解析请求主体
    
    
    /**
     *  加载路由控制
     */
    
    var routes = require('./routes/index');
    var users = require('./routes/users');
    
    /**
     *  创建项目实例
     */
        
    var app = express();
    
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.use('/', routes);
    app.use('/users', users);
    
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


#### * www 文件

    #!/usr/bin/env node
    
    /**
     * Module dependencies.
     */
    
    var app = require('../app');
    var debug = require('debug')('express-helloWorld:server');
    var http = require('http');
    
    /**
     * Get port from environment and store in Express. 定义服务器端口号
     */
    
    var port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);
    
    /**
     * Create HTTP server. 创建 HTTP 服务器
     */
    
    var server = http.createServer(app);
    
    /**
     * Listen on provided port, on all network interfaces.
     */
    
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
    
    /**
     * Normalize a port into a number, string, or false.
     */
    
    function normalizePort(val) {
      var port = parseInt(val, 10);
    
      if (isNaN(port)) {
        // named pipe
        return val;
      }
    
      if (port >= 0) {
        // port number
        return port;
      }
    
      return false;
    }
    
    /**
     * Event listener for HTTP server "error" event.
     */
    
    function onError(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }
    
      var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    
      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    }
    
    /**
     * Event listener for HTTP server "listening" event.
     */
    
    function onListening() {
      var addr = server.address();
      var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
      debug('Listening on ' + bind);
    }

