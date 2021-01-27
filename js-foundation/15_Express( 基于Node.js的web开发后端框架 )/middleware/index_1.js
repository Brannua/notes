/**
 * 应用级别的中间件
 */
const express = require('express');
const app = express();
let total = 0;
// 中间件函数不设置请求路径
// 则为全局监控中间件函数
// 无论访问路径是什么,都会访问到这个中间件函数
app.use((req, res, next) => {
    console.log('有人访问');
    next();
});
// 中间件函数的next参数都是可选的
app.use('/user', (req, res, next) => {
    console.log(Date.now()); // 记录访问时间
    next();
});

app.use('/user', (req, res, next) => {
    console.log('访问了/user路径'); // 记录访问日志
    next();
});

app.use('/user', (req, res) => {
    total++;
    console.log(total); // 统计访问量
    res.send('result');
});

app.listen(3000, () => {
    console.log('running at port 3000');
})