/**
 * 路由管理
 * 根据 ( 请求路径 + 请求方式 ) 进行路径分发处理
 * http的常用请求方式:
 * post ==> 增
 * delete ==> 删
 * put ==> 改
 * get ==> 查
 * 
 * 这种url格式的地址称为 ---> restful api
 */

const express = require('express');
const app = express();


/**
 * 基本的路由处理
 */
// app.post('/', (req, res) => {
//     res.send('post data');
// });
// app.delete('/', (req, res) => {
//     res.send('delete data');
// });
// app.put('/', (req, res) => {
//     res.send('put data');
// });
// app.get('/', (req, res) => {
//     res.send('get data');
// });
// --------------------------------------
/**
 * 直接使用use方法可以监控所有形式的路由请求
 */
app.use((req, res)=>{
    res.send('ok');
});

app.listen(3000, () => {
    console.log('Running at port 3000');
});