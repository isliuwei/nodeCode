/**
 *
 *  title:  ch07 os_cpus.js
 *  author: isliuwei
 *  time:   2016/09/11/23:18:07
 *  intro:  获取 CPU 内核信息
 *
 */

console.info("----------    OS cpus()    ----------");
console.info();
var os = require("os");
var cpus = os.cpus();
console.info(cpus[0].model);
//  Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz
console.info();
console.info(cpus);
console.info();
console.info("----------    OS cpus()    ----------");