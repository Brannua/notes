// const http = require('http');
// const sServer = require('./static-server');
const router = require('./router');
const bodyParser = require('./body-parser');
const url = require('url');
const render = require('./render');

const express = require('express')
const app = express()

app.use(express.static('../www'))

// http.createServer((req, res) => {
app.all('*', (req, res) => {

    // 解析url中的参数并追加到req.query中
    req.query = url.parse(req.url).query;
    // 给res添加向前端返数据的方法
    render(res);
    // sServer(req, res, () => {
    // 统一解析处理前端提交过来的表单数据
    bodyParser(req, () => {
        // 后端分发路由,并给前端提供接口
        router(req, res);
    })

    // });
}).listen(3000, () => {
    console.log('Example app listening on port 3000!');
});