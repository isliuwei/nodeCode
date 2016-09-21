/**
 *
 *  title:  ch08 mkdirSync.js
 *  author: isliuwei
 *  time:   2016/09/15/10:50:06
 *  intro:  创建与删除目录
 *
 */

console.info("----------    fs mkdirSync    ----------");
console.info();


var fs = require("fs");
var mkdirsync = 'dir/mkdirsync';
fs.mkdirSync(mkdirsync,0777);
console.info();
var child = require("child_process");
var ls_dir_mkdir = child.spawn("ls",['-alh','dir']);

ls_dir_mkdir.stdout.on('data',(data)=>{
    console.info('ls -alh dir stdout: ');
    console.log(`stdout: ${data}`);
    console.info();
    fs.rmdirSync(mkdirsync);
    console.info('fs.rmdirSync() Done.');
    var ls_dir_rmdir = child.spawn("ls",['-alh','dir']);

    ls_dir_rmdir.stdout.on('data',(data)=>{
        console.info("ls -alh dir stdout: ");
        console.info(`stdout: ${data}`);
        console.info();
    });

    ls_dir_rmdir.on('error',(code)=>{
        console.log(`child process error with code: ${code}`);
        console.info();
    });

    ls_dir_rmdir.on('close',(code)=>{
        console.log(`child process closed with code: ${code}`);
        console.info();
    });

});


    ls_dir_mkdir.on('error',(code)=>{
        console.log(`child process error with code: ${code}`);
    console.info();
    });

    ls_dir_mkdir.on('close',(code)=>{
        console.log(`child process closed with code: ${code}`);
    console.info();
    });


console.info();
console.info("----------    fs mkdirSync    ----------");
