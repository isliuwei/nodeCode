/**
 * 程序入口文件
 */

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var _ = require('underscore');
var Movie = require('./models/movie');
var port = process.env.PORT || 3000;
var app = express();

mongoose.connect('mongodb://localhost/nodejs');

app.set('views','./views/pages');
app.set('view engine','jade');

//app.use(bodyParser.json());                                         //解析请求主体
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));
app.listen(port);

console.log('movie started on port ' + port);


//index page
app.get('/', function (req, res) {
    Movie.fetch(function(err,movies){
        res.render('index',{
            title: 'iMovie 首页',
            movies: movies
        })
    });
    /*
    res.render('index', {
        title: 'imooc 首页',
        movies: [{
            title: "复仇者联盟2",
            _id: 1,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
            title: "复仇者联盟2",
            _id: 2,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
            title: "复仇者联盟2",
            _id: 3,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
            title: "复仇者联盟2",
            _id: 4,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }, {
            title: "复仇者联盟2",
            _id: 5,
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg'
        }]

    })
     */
});



//detail page
app.get('/movie/:id', function (req, res) {
    var id = req.params.id;
    Movie.findById(id,function(err,movie){
        res.render('detail',{
            title: 'iMovie 详情',
            movie: movie
        });
    });

    /*
    res.render('detail', {
        title: 'imooc 详情',
        movie: {
            doctor: '乔斯·韦登',
            country: '美国',
            title: '复仇者联盟2',
            year: '2015',
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg',
            language: '英语',
            flash: 'https://www.youtube.com/embed/3BFXV2Q1AB4',
            summary: '影片讲述当钢铁侠试图启动处于休眠状态的维持和平计划时，事情出了差错。于是，在地球面临生死存亡的紧急关头时，强大的超级英雄们挺身而出承担起拯救世界的重任，他们将阻止可怕的人工智能机器人“奥创”制定恐怖计划。'
        }
    })
    */
});


app.post('/admin/movie/new',function(req,res){

    var id = req.body.movie._id;

    var movieObj = req.body.movie;

    if(id !== 'undefined'){
        Movie.findById(id, function(err, movie){
            if(err){
                console.log(err);
            }

            _movie = _.extend(movie, movieObj);
            _movie.save(function(err,movie){
                if(err){
                    console.log(err);
                }
                res.redirect('/movie/'+movie._id);
            });
        });
    }else{
        _movie = new Movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        });

        _movie.save(function(err,movie){
            if(err){
                console.log(err);
            }
            res.redirect('/movie/'+movie._id);
        });
    }
});


app.get('/admin/update/:id',function(req,res){
    var id = req.params.id;
    if(id){
        Movie.findById(id,function(err,movie){
            res.render('admin',{
                title: 'iMovie 后台更新页',
                movie: movie
            });
        });
    }
});



//admin page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    })
});



//list page
app.get('/admin/list', function (req, res) {

    Movie.fetch(function(err,movies){
        res.render('list',{
            title: 'iMovie 首页',
            movies: movies
        })
    });
    /*
    res.render('list', {
        title: 'imooc 列表页',
        movies: [{
            doctor: '乔斯·韦登',
            country: '美国',
            title: '复仇者联盟2',
            year: '2015',
            poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg',
            language: '英语',
            flash: 'https://www.youtube.com/embed/3BFXV2Q1AB4',
            summary: '影片讲述当钢铁侠试图启动处于休眠状态的维持和平计划时，事情出了差错。于是，在地球面临生死存亡的紧急关头时，强大的超级英雄们挺身而出承担起拯救世界的重任，他们将阻止可怕的人工智能机器人“奥创”制定恐怖计划。'
        }]
    })
    */
});


app.delete('/admin/list', function(req, res) {
    var id = req.query.id;


    if (id) {
        Movie.remove({_id: id}, function(err, movie) {
            if (err) {
                console.log(err);
            }
            else {
                res.json({success: 1});
            }
        })
    }
});
