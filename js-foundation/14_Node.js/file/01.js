const path = require('path');
const fs = require('fs');
// ----------------------------------------------------------------------------------
// fs.stat(path.join(__dirname, "./data.txt"), (err, states) => {
//     console.log(err);
//     console.log(states);
//     console.log(states.isFile());
//     console.log(states.isDirectory());
// });
// ----------------------------------------------------------------------------------
// fs.stat(path.join(__dirname, "./test"), (err, states) => {
//     console.log(states.isFile());//判断是否为文件
//     console.log(states.isDirectory());//判断是否为路径
// });
// ----------------------------------------------------------------------------------
// fs.stat(path[, options], callback)用于查看文件的状态信息
// console.log(1);
// fs.stat(path.join(__dirname, "./data.txt"), (err, states) => {
//     console.log("atime:访问时间" + states.atime);
//     console.log("mtime:内容修改时间" + states.mtime);
//     console.log("ctime:文件状态修改时间" + states.ctime);
//     console.log("birthtime:创建时间" + states.birthtime);
//     console.log("该回调函数确定是异步操作没错了！！！")
// });
// console.log(2);
// ----------------------------------------------------------------------------------
// console.log(1);
// let res = fs.statSync(path.join(__dirname, "./data.txt"));
// console.log(res);
// console.log(3, "这个是同步操作确定无疑了,阻塞式的性能低");
// ----------------------------------------------------------------------------------
