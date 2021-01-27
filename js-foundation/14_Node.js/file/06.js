/* 
    文件读写API进阶
    fs.readFile(path[, options], callback)
    fs.readFileSync(path[, options])
*/

const path = require('path');
const fs = require('fs');
// -----------------------------------------------------------------------
// 异步方法
// fs.readFile(path.join(__dirname, "./data.txt"), 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         //如果没有加编码字符集参数
//         console.log(data.toString());
//         //如果加上编码字符集参数
//         console.log(data);
//     }
// });
// -----------------------------------------------------------------------
// 同步方法
// let data = fs.readFileSync(path.join(__dirname, "./data.txt"), 'utf8');
// console.log(data);