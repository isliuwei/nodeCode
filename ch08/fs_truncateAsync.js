/**
 *
 *  title:  ch08 truncateAsync.js
 *  author: isliuwei
 *  time:   2016/09/12/20:45:56
 *  intro:  修改文件长度
 *
 */

console.info("----------    fs truncateAsync    ----------");
console.info();

var fs = require("fs");
var child = require("child_process");
var catFile = child.exec("cat txt/truncateAsync.txt",(err,stdout,stderr)=>{
	console.log("cat txt/truncateAsync.txt stdout: ");
	console.log(stdout);
	console.log(`length: ${stdout.length}`);
	console.log(stderr);
	console.info();
	fs.truncate("txt/truncateAsync.txt",5,()=>{
		var catFileTruncateAsync = child.exec("cat txt/truncateAsync.txt",(err,stdout,stderr)=>{
			console.log("cat txt/truncateAsync.txt stdout: ");
			console.log(stdout);
			console.log(`length: ${stdout.length}`);
			console.log(stderr);
			console.info();
		});
	});
});


console.info();
console.info("----------    fs truncateAsync    ----------");
