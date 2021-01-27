/* 
    文件的存在性检查
*/

const path = require('path');
const fs = require('fs');

/* 
    fs.access(path[, mode], callback)
 */
// console.log(11);
// fs.access(path.join(__dirname, "data.txt"), (err) => {
//     if (!err) {
//         console.log("文件存在");
//     } else {
//         console.log("文件不存在");
//     }
//     console.log("异步操作");
// });
// console.log(33);
// ------------------------------------------------------------
/* 
    fs.accessSync(path[, mode])
 */
// try{
//     fs.accessSync(path.join(__dirname, "data.txt"));
//     console.log("该文件存在");
// } catch(err) {
//     if (err) {
//         console.log('该文件不存在');
//     }
// }
// ------------------------------------------------------------
/* 
    fs.stat(path[, options], callback)
 */
// console.log(111);
// fs.stat('data.txt', (err, states) => {
//     if (!err && states.isFile()) {
//         console.log("文件存在");
//     } else {
//         console.log("文件不存在");
//     }
//     console.log("异步操作");
// });
// console.log(333);