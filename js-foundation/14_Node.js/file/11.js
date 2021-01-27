/* 
    文件监控操作
    fs.watch(filename[, options][, listener])
    fs.watchFile(filename[, options], listener)
        filename: 监控的文件名称
        options: (persitent=true, interval=5007:每隔5007毫秒检测一次文件的状态)
        listener: 事件函数
        curr: 当前文件的状态
        prev: 之前文件的状态
    取消对某特定文件的状态监听
    fs.unwatchFile(filename[, listener])
        listener为可选参数,若不填则默认取消有关特定文件的所有监听函数
    fs.watch(filename[, options][, listener])
*/

const path = require('path');
const fs = require('fs');
// ----------------------------------------------------------------------
/* 
    let cb = (curr, prev) => {
        console.log(curr);
        console.log(prev);
    };
    fs.watchFile(path.join(__dirname, './data.json'), {interval:100}, cb);

    // 测试五秒之后取消对文件data.json的监听
    setTimeout(() => {
        fs.unwatchFile(path.join(__dirname, './data.json'), cb);
    }, 5000);
*/
// ----------------------------------------------------------------------
// 绑定多个监听函数的用法
/* 
    let cb1 = (curr, prev) => {
        console.log(1);
    };
    let cb2 = (curr, prev) => {
        console.log(2);
    };
    let cb3 = (curr, prev) => {
        console.log(3);
    };
    fs.watchFile(path.join(__dirname, './data.json'), {interval:100}, cb1);
    fs.watchFile(path.join(__dirname, './data.json'), {interval:100}, cb2);
    fs.watchFile(path.join(__dirname, './data.json'), {interval:100}, cb3);
    setTimeout(() => {
        fs.unwatchFile(path.join(__dirname, './data.json'), cb1);
    }, 10000);
    setTimeout(() => {
        fs.unwatchFile(path.join(__dirname, './data.json'), cb2);
    }, 20000);
    setTimeout(() => {
        fs.unwatchFile(path.join(__dirname, './data.json'), cb3);
    }, 30000);
*/
// ----------------------------------------------------------------------

// 绑定多个监听函数一次性解绑的用法
/* 
    let cb1 = (curr, prev) => {
        console.log(1);
    };
    let cb2 = (curr, prev) => {
        console.log(2);
    };
    let cb3 = (curr, prev) => {
        console.log(3);
    };
    fs.watchFile(path.join(__dirname, './data.json'), {interval:100}, cb1);
    fs.watchFile(path.join(__dirname, './data.json'), {interval:100}, cb2);
    fs.watchFile(path.join(__dirname, './data.json'), {interval:100}, cb3);
    setTimeout(() => {
        fs.unwatchFile(path.join(__dirname, './data.json'));
    }, 30000);
*/
// ----------------------------------------------------------------------
// 性能方面fs.watch()更好
fs.watch(path.join(__dirname, './data.json'), (eventType, fileName) => {
    console.log(eventType, fileName);
});
















