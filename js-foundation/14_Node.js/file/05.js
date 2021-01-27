/* 
    文件的写操作
    fs.write(fd, buffer[, offset[, length[, position]]], callback)
    同步版本: fs.writeSync(fd, buffer[, offset[, length[, position]]])

    fs.write(fd, string[, position[, encoding]], callback)
    同步版本: fs.writeSync(fd, string[, position[, encoding]])
*/

const path = require('path');
const fs = require('fs');
// ----------------------------------------------------------------
/* 
    fs.write(fd, buffer[, offset[, length[, position]]], callback)
*/
// fs.open(path.join(__dirname, './data.txt'), 'w', (err, fd) => {
//     if (err) {  
//         console.log(err);
//         return;
//     } else {
//         let buf = Buffer.from(hello);
//         fs.write(fd, buf, 0, 3, 0, (err, written, buffer)=>{
//             if (err) {
//                 console.log(err);
//                 return;
//             } else {
//                 console.log(written);
//                 console.log(buffer);
//                 console.log(buf === buffer);
//             }
//         })
//     }
// });
// ----------------------------------------------------------------

/* 
    fs.write(fd, string[, position[, encoding]], callback)
*/
// fs.open(path.join(__dirname, './data.txt'), 'w', (err, fd) => {
//     if (err) {  
//         console.log(err);
//         return;
//     } else {
//         fs.write(fd, 'hello', (err, written, str)=>{
//             if (err) {
//                 console.log(err);
//                 return;
//             } else {
//                 console.log(written);
//                 console.log(str);
//             }
//         })
//     }
// });
// ----------------------------------------------------------------
// 同步操作
// let fd = fs.openSync(path.join(__dirname, "./data.txt"), 'w');
// let buf = Buffer.from('hello');
// let written1 = fs.writeSync(fd, buf, 0, 3, 0);
// let written2 = fs.writeSync(fd, 'string', 0);
// console.log(written1, written2);