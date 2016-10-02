var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* test jade view engine */
router.get('/jade', function(req, res, next) {
  res.render('jade_view.jade', { title: 'view engine Jade' });
});


module.exports = router;
