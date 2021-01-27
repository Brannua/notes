/**
 * 测试接收前端通过发送ajax请求发送过来的数据
 * 利用第三方中间件body-parser进行处理
 */
const express = require('express');
const app = express();
// body-parser中间件支持解析form表单提交的数据,也支持解析json形式的数据( 这里我基于jq利用其ajax来进行测试 )
const bodyParser = require('body-parser');

// 挂载内置中间件
app.use(express.static('../public'));

// 挂载参数处理中间件( 解析JSON格式的数据 )
app.use(bodyParser.json());

// 处理get提交的参数
app.get('/login', (req, res) => {
    let data = req.query;
    console.log(data);
    res.send('get data');
});

// 处理post提交参数
app.post('/login', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send('post data');
});

// 处理put提交参数
app.put('/login', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send('put data');
});

// 处理delete提交参数
app.delete('/login', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send('delete data');
});

app.listen(3000, () => {
    console.log('running at port 3000');
});