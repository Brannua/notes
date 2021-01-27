/* 
    文件的流式操作
        // 基于事件的处理模型
        readline模块
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, //standard input --> 输入设备
    output: process.stdout //standard output --> 输出设备
});
// ----------------------------------------------------------
// rl.question('你如何看待 Node.js 中文网？', (answer) => {
//     // TODO：将答案记录在数据库中。
//     console.log(`感谢您的宝贵意见：${answer}`);

//     rl.close();
// });
// ----------------------------------------------------------
rl.on('line', (line) => {
    if (line === 'exit') {
        rl.close();
        return;//只有加上这行代码才不会继续往下多执行一步打印
    }
    console.log("你输入了如下内容:" + line);
});