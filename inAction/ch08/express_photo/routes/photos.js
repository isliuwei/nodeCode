var express = require('express');
var router = express.Router();


//引入 Photo 模型
var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');
var url = require('url');
var formidable = require('formidable');
var join = path.join;



router.get('/list',function(req,res,next){

    /*
    var photos = [];

    photos.push({
        name: 'Node.js Logo',
        //path: 'http://nodejs.org/images/logos/nodejs-green.png',
        path: '/images/nodejs-green.png'
    });

    photos.push({
        name: 'Ryan Speaking',
        //path: 'http://nodejs.org/images/ryan-speaker.jpg',
        path: '/images/ryan-speaker.jpg'
    });

     res.render('photos',{
         title: 'Photos',
         photos: photos
     });
     */


    Photo.find({},function(err,photos){
        if(err) return next(err);

        res.render('photos',{
            title: 'Photos',
            photos: photos
        });

    });


});


router.get('/upload',function(req,res){
    res.render('upload');
});

/**
 * 处理上传照片提交
 * bodyParser() 更具体地说 multipart() 中间件, 它会给你一个 req.files 对象,代表上传的文件,并把这个文件保存到硬盘中
 * 可以通过 req.files.photo.image访问这个对象, 上传表单的输入域, photo[name] 可以通过 req.body.photo.name 访问到
 *
 *
 *
 */


router.post('/doupload',function(req,res,next){



    /*
        return function(req,res,next){

            var img = req.files.photo.image;
            var name = req.body.photo.name || img.name;
            var path = join(dir, img.name);

            fs.rename(img.path, path, function(err){
                if(err) return next(err);
                Photo.create({
                    name: name,
                    path: img.name
                },function(err){
                    if(err) return next(err);
                    res.redirect('/list');
                });
            });

        };
    */

    var photoName = req.body.photoName;
    console.log(photoName);

    var form = new formidable.IncomingForm();
    form.uploadDir = './public/photos/';    //上传目录
    form.keepExtensions = true;             //保留后缀格式
    form.maxFieldsSize = 2*1024*1024;       //文件大小
    //console.log('new formidable',form);

    form.parse(req, function(err, fields, files) {


        if (err){
             console.log("文件上传失败!");
             return res.redirect('/upload');
         }


         for (var i in files) {
             if (files[i].size == 0) {
                 //使用同步方式删除一个文件
                 fs.unlinkSync(files[i].path);
                 //console.log('file path:', files[i].path);
                 //console.log('success remove a empty file');
             } else {
                 var target_path = './public/photos/' + files[i].name;  //这里重名时  一定要注意
                 var obj = files[i].path.split('/');
                 var img_path = "/"+obj[1]+"/"+obj[2];


                 fs.rename(target_path,files[i].path,function(err){

                     Photo.create({
                         name: files[i].name,
                         path: img_path
                     }, function (err) {
                         if (err) return next(err);
                         res.redirect('/photos/list');
                     });

                 });




             }

         }
    });






});


router.get('/:id/download',function(req,res,next){
    var id = req.params.id;
    Photo.findById(id,function(err,photo){
        if(err) return next(err);

        var rootPath = path.normalize(__dirname+"/..");
        var downloadPath = join(rootPath,"public"+photo.path);
        //console.log(downloadPath);
        res.download(downloadPath);

    });

});



module.exports = router;
