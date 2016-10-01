var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login');
});


router.post('/checkLogin', function(req, res, next) {
    var userName = req.body.userName;
    var passWord = req.body.passWord;
    res.render('info',{'userName':userName,'passWord':passWord});
});

router.get('/getData',function(req,res){
    var info = {
        age: 21,
        sex: 'male',
        location: 'Anqing',
        school: 'Heilongjiang University',
        ID: 34080199004060218
    };
    res.send(info);
});









module.exports = router;
