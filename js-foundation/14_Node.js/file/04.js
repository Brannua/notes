/* 
    文件读写操作
    fs.read(fd, buffer, offset, length, position, callback)

*/

const path = require('path');
const fs = require('fs');
// ----------------------------------------------------------
/* 
    异步操作
 */
// fs.open(path.join(__dirname, "./data.txt"), 'r', (err, fd) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         let buf = Buffer.alloc(5);
//         fs.read(fd, buf, 0, 3, null, (err, bytesRead, buffer) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             } else {
//                 console.log(bytesRead);
//                 console.log(buffer);
//                 console.log(buf === buffer);//同一份数据
//             }
//         })
//     }
// })
/* 
    同步操作
 */
// let fd = fs.openSync(path.join(__dirname, "./data.txt"), 'r');
// let buf = Buffer.alloc(5);
// let res = fs.readSync(fd, buf, 0, 3, null);
// console.log(res, buf);