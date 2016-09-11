/**
 *
 *  title:  ch06 child_process_spawn_usage.js
 *  author: isliuwei
 *  time:   2016/09/10/10:48:32
 *  intro:  使用spawn方法创建子进程
 *
 */

console.info("----------    child_process spawn usage    ----------");
console.info();
/**
 *
 * child_process spawn
 * @type {exports.spawn|*}
 *
 */

var child = require("child_process");

var ls_desktop = child.spawn('ls',['-alh','//Users/liuwei/Desktop']);

var ls_desktop_error = child.spawn('ls',['-alh','Desktop']);

ls_desktop.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls_desktop.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls_desktop.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

ls_desktop_error.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});
