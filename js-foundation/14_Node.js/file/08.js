/* 
    文件操作(文件内容追加)
    fs.appendFile(path, data[, options], callback)
    fs.appendFileSync(path, data[, options])
    // 文件内容的追加还可以利用open方法的不同打开方式参数来实现
    // 多次执行文件的追加会多次追加内容
*/

const path = require('path');
const fs = require('fs');
// ---------------------------------------------------------
// fs.appendFile(path.join(__dirname, "./data.txt"), "我是append进来的", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// });
// ---------------------------------------------------------
fs.appendFileSync(path.join(__dirname, "./data.txt"), "我也是append进来的")