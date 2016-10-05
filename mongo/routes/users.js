var express = require('express');
var router = express.Router();

/*mycode*/
var User = require("../models/user");
var passport = require("passport");




router.use(function(req, res, next) {
  // 为你的模板设置几个有用的变量
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();

});



router.get("/", function(req, res, next) {
  // 查询用户集合，并且总是先返回新的用户
  User.find()
      .sort({ createdAt: "descending" })
      .exec(function(err, users) {
        if (err) {
          return next(err);
        }
        res.render("user", {
          users: users
        });
      });
});





router.get("/signup", function(req, res) {
    res.render("signup");
});


router.post("/signup", function(req, res, next) {
    // body-parser把username和password添加到了req.body
    var username = req.body.username;
    var password = req.body.password;
    // 调用findOne只返回一个用户。你想在这匹配一个用户名
    User.findOne({ username: username }, function(err, user) {
        if (err) { return next(err); }
        // 如果你找到一个用户，你需要保证它的用户名必须已经存在
        if (user) {
            req.flash("error", "User already exists");
            return res.redirect("/users/signup");
        }
        // 通过username和password创建一个User模型的实例
        var newUser = new User({
            username: username,
            password: password
        });
        // 将新的用户保存到数据库中，然后继续到下一个请求处理
        newUser.save(next);
    });
    // 用户有效性验证
}, passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/users/signup",
    failureFlash: true
}));





router.get("/:username", function(req, res, next) {


    User.findOne({ username: req.params.username }, function(err, user) {
        if (err) { return next(err); }
        if (!user) { return next(404); }
        res.render("profile", { user: user });
    });
});


router.get("/login", function(req, res) {
    res.render("login");
});




function ensureAuthenticated(req, res, next) {
    // 一个Passport提供的函数
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash("info", "You must be logged in to see this page.");
        res.redirect("/users/login");
    }
}

// 确保用户被身份认证；如果它们没有被重定向的话则运行你的请求处理
router.get("/edit", ensureAuthenticated, function(req, res) {
    res.render("edit");
});









router.post("/login", passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/users/login",
    // 如果用户登录失败则通过connect-flash设置错误信息
    failureFlash: true
}));


router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});



// 通常，这会是一个PUT请求，不过HTML表单仅仅支持GET和POST
router.post("/edit", ensureAuthenticated, function(req, res, next) {
    req.user.displayName = req.body.displayname;
    req.user.bio = req.body.bio;
    req.user.save(function(err) {
        if (err) {
            next(err);
            return;
        }
        req.flash("info", "Profile updated!");
        res.redirect("/users/edit");
    });
});









module.exports = router;
