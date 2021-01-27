/* 
    优化！！！！！！！！

    《使流式操作的读写速度一致》

    采用文件的流式操作
        fs.createReadStream(path[, options])
        fs.createWriteStream(path[, options])
*/

const fs = require('fs');

// source路径
// let sPath = 'C:\\Users\\Administrator\\Desktop\\new\\file\\picture.rar';
// // target路径
// let tPath = 'C:\\Users\\Administrator\\Desktop\\picture.rar';

// // 创建读文件流
// const readStream = fs.createReadStream(sPath);
// // 创建写文件流
// const writeStream = fs.createWriteStream(tPath); 

// readStream.pipe(writeStream);

// 以上几行代码可以整合成一行代码
fs.createReadStream('C:\\Users\\Administrator\\Desktop\\new\\file\\picture.rar').pipe(fs.createWriteStream('C:\\Users\\Administrator\\Desktop\\picture.rar'));