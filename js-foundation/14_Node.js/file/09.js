/* 
    文件的删除操作
    fs.unlink(path, callback)
    fs.unlinkSync(path)
*/

const path = require('path');
const fs = require('fs');
// ----------------------------------------------------------
// 异步操作
// fs.unlink(path.join(__dirname, "./data.txt"), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// });


// 无法删除文件夹
// fs.unlink(path.join(__dirname, "./unAbleDelete"), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// });


// 可以删除快捷方式,但是无法删除快捷方式指向的文件
// fs.unlink(path.join(__dirname, "./deleteFile.lnk"), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// });
// ----------------------------------------------------------

// 同步操作
// fs.unlinkSync(path.join(__dirname, "./data.txt"));