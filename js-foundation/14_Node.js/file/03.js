/* 
    文件操作
*/

const path = require('path');
const fs = require('fs');
// ------------------------------------------------------------

/* 
    fs.open(path, flags[, mode], callback)
 */
// fs.open(path.join(__dirname, "data.txt"), 'r', (err, fd) => {
//     if (err) { //文件不存在
//         console.log(err);
//         return;
//     } else {
//         console.log("文件描述符是: " + fd);
//     }
// });
/* 同步方法 */
// let fd = fs.openSync(path.join(__dirname, "data.txt"), 'r');
// console.log(fd);
// ------------------------------------------------------------