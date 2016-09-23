/**
 * Created by liuwei on 2016/9/23.
 */


//引入  readline  模块
var readline = require("readline");


var read_line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
read_line.question("请输入测试句子:\n",function(sentence){
    var res = sentence.split(' ').reverse().join(' ');
    console.log(res);

    read_line.close();
});


var line = read_line();
var res = line.split(' ').reverse().join(' ');
print(res);


read_line(function(sentence){
	var res = sentence.split(' ').reverse().join(' ');
	print(res);
	read_line.close();

});
*/

read_line.question("",function(input){

    var arr = ["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"];
	var matharr = [0,1,2,3,4,5,6,7,8,9];
	var str = input;
	var newarr = [];

		do{
			for(var i=0;i<arr.length;i++){
				var index = str.indexOf(arr[i]);
				if( index != -1){
					str = str.replace(arr[i],"");
					newarr.push(matharr[i]);
					break;
				}
			}
		}while(str != "");

		newarr = newarr.sort();
		var newstr = newarr.join("");
		console.log(newstr);


    read_line.close();
});

/*

	var arr = ["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"];
		var matharr = [0,1,2,3,4,5,6,7,8,9];
		var str = "ZEROTWOONE";
		var newarr = [];

		do{
			for(var i=0;i<arr.length;i++){
				var index = str.indexOf(arr[i]);
				if( index != -1){
					str = str.replace(arr[i],"");
					newarr.push(matharr[i]);
					break;
				}
			}
		}while(str != "");

		newarr = newarr.sort();
		var newstr = newarr.join("");
		console.log(newstr);
*/
