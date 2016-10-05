// 序列化和反序列化user（位于setuppassport.js中）
var passport = require("passport");
var User = require("./models/user");


// 引入Passport的LocalStrategy
var LocalStrategy = require("passport-local").Strategy;

module.exports = function() {
    // serializeUser可以将一个user对象转换为ID。不传入错误，并传入一个user对象调用done
    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });
    // deserializeUser可以将用户ID转为user对象。一旦完成转换，你需要传入错误和用户对象来调用done
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};






// 告诉Passport使用本地策略
passport.use("login", new LocalStrategy(function(username, password, done) {
    // 跟之前一样使用MongoDB查询并获取一个user
    User.findOne({ username: username }, function(err, user) {
        if(err) { return done(err); }
        // 如果没有用户提供了用户名，则返回错误消息
        if (!user) {
            return done(null, false, { message: "No user has that username!" });
        }
        // 调用你之前在User模块中定义的checkPassworld方法
        user.checkPassword(password, function(err, isMatch) {
            if (err) { return done(err); }
            if (isMatch) {
                // 如果匹配了则不带错误消息返回当前用户
                return done(null, user);
            } else {
                // 如果没匹配则不带错误消息返回false
                return done(null, false, { message: "Invalid password." });
            }
        });
    });
}));




