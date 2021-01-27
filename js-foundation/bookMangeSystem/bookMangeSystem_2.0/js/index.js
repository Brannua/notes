/* url核心模块获取GET请求的url中的参数信息 */
const url = require('url');
/* 路由 */
let router = require('./router.js');
let bodyParser = require('./body-parser.js');
let render = require('./render.js');

const express = require('express')
const app = express()

app.use(express.static('../www'))

app.all('*', (req, res) => {
    // 集中处理GET请求的参数
    req.query = url.parse(req.url, true).query;
    // 绑定渲染函数
    render(res);
    // 处理动态资源
    // 集中处理POST请求的参数
    bodyParser(req, () => {
        // 后续操作(回调函数->异步执行)
        // 在这里调用router是为了保证能够获取到bodyParser添加的body属性
        router(req, res);
    });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))