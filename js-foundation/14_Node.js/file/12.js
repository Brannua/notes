/* 
    大文件操作

(readFile读取文件的时候会一次性的把所有数据都加载到内存里面，不合理)
    fs.readFile('C:\\Users\\Administrator\\Desktop\\new\\file\\picture.rar', (err, data) => {
        console.log(err);
    });

采用文件的流式操作
    fs.createReadStream(path[, options])
    fs.createWriteStream(path[, options])
*/

const fs = require('fs');

// source路径
let sPath = 'C:\\Users\\Administrator\\Desktop\\new\\file\\picture.rar';
// target路径
let tPath = 'C:\\Users\\Administrator\\Desktop\\picture.rar';

// 创建读文件流
const readStream = fs.createReadStream(sPath);
// 创建写文件流
const writeStream = fs.createWriteStream(tPath); 

// 绑定data事件
let num = 0;
// 基于事件的回调函数
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
    num++;
});
// 绑定end事件
readStream.on('end', () => {
    console.log(num);//测试data事件触发了多少次
});