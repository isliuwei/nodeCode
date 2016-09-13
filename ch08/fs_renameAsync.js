/**
 *
 *  title:  ch08 fs_renameAsync.js
 *  author: isliuwei
 *  time:   2016/09/12/16:00:29
 *  intro:  重命名文件
 *
 */

console.info("----------    fs rename    ----------");
console.info();

var fs = require("fs");
console.time("fs-rename-async");
fs.rename("txt/fs-name-asyn.txt","txt/fs-rename-asyn.txt",function(err){
    console.time("time - 10000✖10000");

    for(var i=0; i<10000; i++){
        for(var j=0; j<10000; j++){
            ;
        }
    }

    console.timeEnd("time - 10000✖10000");

    if(err) {
        console.log(err);
    }
    console.log("renamed file complete");

});
console.timeEnd("fs-rename-async");
console.info();

var child = require("child_process");
var cat_file_original = child.spawn("cat",["txt/fs-name-asyn.txt"]);

cat_file_original.on("error",function(code){
    console.log(`child process error with code ${code}`);
});

cat_file_original.stdout.on("data",function(data){
    console.log(`stdout: ${data}`);
});

console.info();

var cat_file_rename = child.spawn("cat",["txt/fs-rename-asyn.txt"]);

cat_file_rename.stdout.on("data",(data) => {
    console.log(`stdout: ${data}`);
});

cat_file_rename.on("error",(code) => {
    console.log(`child process error with code ${code}`);
});

console.info();
console.info("----------    fs rename    ----------");