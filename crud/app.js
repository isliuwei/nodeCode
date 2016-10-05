var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');

var app = new express();

app.use(logger('dev'));


// 创建一个全局的数组用于储存所有的条目
var items = [];
// 使这个条目数组可以在所有视图中访问
app.locals.items = items;

app.get('/',function(req,res){
    res.send("you just sent a GET request, friend");
});

app.post('/',function(req,res){
    res.send("a POST request? nice");
});

app.put('/',function(req,res){
    res.send("i don't see a lot of PUT requests anymore");
});

app.delete('/',function(req,res){
    res.send("oh my, a DELETE??");
});







app.use(function(req,res){
    res.status(404).end('404');
});

app.listen(3000,function(){
    console.log('Router started on port 3000......');
});