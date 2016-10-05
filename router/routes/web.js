var express = require('express');
var router = express.Router();

/*
router.get('/list',function(req, res){
    res.render('web', {
        title: 'Express Router',
        users: ['John','isliuwei','hello']
    });
});
*/


router.get('/',function(req, res){
    res.render('web', {
        title: 'Express Router',
        users: ['John','isliuwei','hello']
    });
});


module.exports = router;