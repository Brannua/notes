/* 
    目录操作
    fs.mkdir(path[, options], callback)
    fs.mkdirSync(path[, options])

    fs.readdir(path[, options], callback)
    fs.readdirSync(path[, options])

    fs.rmdir(path, callback)
    fs.rmdirSync(path)
*/

const path = require('path');
const fs = require('fs');
// ------------------------------------------------------
// 异步操作
// fs.mkdir(path.join(__dirname, "./hello"), (err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log("创建成功");
//     }
// });
// ------------------------------------------------------
// 同步方式
// fs.mkdirSync(path.join(__dirname, "./hello"));
// ------------------------------------------------------
// 异步方式
// fs.readdir(__dirname, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         files.forEach((e, i) => {
//             fs.stat(path.join(__dirname, e), (err, states) => {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 } else {
//                     if (states.isFile()) {
//                         console.log("第" + (i+1) + "个: ", `${e}是文件`);
//                     } else if (states.isDirectory()) {
//                         console.log("第" + (i+1) + "个: ", `${e}是目录`);
//                     }
//                 }
//             })
//         })
//     }
// })
// ------------------------------------------------------
// 同步方式
// let files = fs.readdirSync(__dirname);
// files.forEach((e, i) => {
//     fs.stat(path.join(__dirname, e), (err, states) => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             if (states.isFile()) {
//                 console.log("第" + (i + 1) + "个: ", `${e}是文件`);
//             } else if (states.isDirectory()) {
//                 console.log("第" + (i + 1) + "个: ", `${e}是目录`);
//             }
//         }
//     })
// })
// ------------------------------------------------------
// 异步方式
// fs.rmdir(path.join(__dirname, './demo'), (err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
// });
// ------------------------------------------------------
// 同步方式
// fs.rmdirSync(path.join(__dirname, './hello'))
