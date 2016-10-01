
/*连接 nodejs MongoDB数据库*/

/*打开 MongoDB 连接*/
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb:localhost/nodejs');

/**
 * 关闭 MongoDB 连接
 *
 * mongoose.discount();
 */

/**
 * 注册 schema 类似MySQL的表
 */

var Users = new Schema({
    userName: String,
    password: String
});





