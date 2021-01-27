/**
 * 托管静态文件
 * 指定虚拟目录可选
 * 不设置虚拟目录则默认静态资源访问的根目录为 /
 * 可以指定多个目录作为静态资源目录
 */
const express = require('express');
const app = express();
/**
 * 实现静态资源服务
 */
// app.use(express.static('public_2'));
// let server = app.use('/abc',express.static('public'));
// server.listen(3000, ()=>{
//     console.log('Running at port 3000');
// });
// ------------------------------------------------------------
/**
 * 代码优化
 */
app.use(express.static('public_2'));
app.use('/abc', express.static('public'));
app.listen(3000, () => {
    console.log('Running at port 3000');
});