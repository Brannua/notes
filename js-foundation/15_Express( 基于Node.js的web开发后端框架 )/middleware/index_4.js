/**
 * 应用中间件
 */
const express = require('express');
const app = express();
// body-parser中间件支持解析form表单提交的数据,也支持解析json形式的数据( 这里我基于jq利用其ajax来进行测试 )
const bodyParser = require('body-parser');

// 挂载内置中间件
app.use(express.static('../public'));

// 挂载参数处理中间件( POST提交 )
app.use(bodyParser.urlencoded({
    extended: false
}));

// 处理get提交的参数
app.get('/login', (req, res)=>{
    let data = req.query;
    console.log(data);
    res.send('get data');
});

// 处理post提交参数
app.post('/login', (req, res)=>{
    let data = req.body;
    // 模拟登录验证功能
    if (data.username == 'admin' && data.password == '123') {
        res.send('success');
    } else {
        res.send('failure');
    }
});

app.listen(3000, () => {
    console.log('running at port 3000');
});