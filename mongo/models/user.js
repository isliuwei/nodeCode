

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    createdAt: { type: Date, default: Date.now() },
    displayName: String,
    bio: String
});



//给用户模型添加一个简单的方法

userSchema.methods.name = function() {
    return this.displayName || this.username;
};


// 引入bcrypt 确保你储存的密码安全
var bcrypt = require("bcrypt-nodejs");
var SALT_FACTOR = 10;


// 散列化密码的预储存动作
// 一个用于提供给用户bcrypt模块空函数
var noop = function() {};
// 定义一在模型保存前运行的函数
userSchema.pre("save", function(done) {
    // 储存当前用户的引用
    var user = this;
    // 如果密码没有被修改过的话跳过处理逻辑
    if (!user.isModified("password")) {
        return done();
    }
    // 根据salt生成对应的散列，一旦完成则调用内部函数
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if (err) { return done(err); }
        bcrypt.hash(user.password, salt, noop,
            // 散列化用户的密码
            function(err, hashedPassword) {
                if (err) { return done(err); }
                // 储存密码并继续进行保存
                user.password = hashedPassword;
                done();
            }
        );
    });
});





//  检查用户密码
userSchema.methods.checkPassword = function(guess, done) {
    bcrypt.compare(guess, this.password, function(err, isMatch) {
        done(err, isMatch);
    });
};


/*
    一旦你定义了有自己属性和方法的模式，你就需要将模式附加到实际的模型上了。
    你只需要一行代码就能做到这些，由于你要在一个文件中定义用户模型，
    你将需要确保module.exports暴露它，从而使得其它文件可以require它。
*/
// 创建并暴露用户模型
var User = mongoose.model("User", userSchema);
module.exports = User;