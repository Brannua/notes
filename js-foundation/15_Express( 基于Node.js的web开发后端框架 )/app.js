const express = require('express');
const app = express();

/**
 * 创建服务器和原生风格类似的写法如下
 */
// let server = app.get('/', (req, res) => {
//     res.send('Hello world!');
// });
// server.listen(3000, () => {
//     console.log('Running at port 3000');
// });

/**
 * 创建服务器支持链式调用
 */
app.get('/', (req, res) => {
    res.send('Hello world!');
})
.listen(3000, () => {
    console.log('Running at port 3000');
});