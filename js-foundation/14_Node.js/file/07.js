/* 
    文件的写操作进阶
    fs.writeFile(file, data[, options], callback)
    fs.writeFileSync(file, data[, options])
*/

const path = require("path");
const fs = require("fs");
// -----------------------------------------------------------------
// 异步方式
// fs.writeFile(path.join(__dirname, "./data.txt"), "nihao", (err)=>{
//     if (err) {  
//         console.log(err);
//         return;
//     }
// })
// -----------------------------------------------------------------
// 同步方式
// fs.writeFileSync(path.join(__dirname, "./data.txt"),d 'hehe');