/**
 *
 *  title:  ch07 os_hostname.js
 *  author: isliuwei
 *  time:   2016/09/11/22:58:42
 *  intro:  返回操作系统运行时间
 *
 */

console.info("----------    OS uptime()    ----------");
console.info();
var os = require("os");
var uptime = os.uptime();
console.info(`操作系统已经运行了: ${uptime} seconds.`);
console.info();
var sTime = convertTime(uptime);
console.info(`操作系统已经运行了: ${sTime}.`);
console.info();

/**
 *
 *      Format time to Hour/Minutes/Seconds
 *      @param   uptime
 *      @return  {string}
 *
 */

function convertTime(uptime)
{
    var runTime;
    var hour;
    var minute;
    var second;
    hour = parseInt( uptime / 3600);
    minute = parseInt( ( uptime - hour * 3600 ) / 60 );
    second = uptime - hour * 3600 - minute * 60;
    runTime = `${hour} hours ${minute} minutes ${second} secondes`;
    return runTime;

}

console.info("----------    OS uptime()    ----------");
