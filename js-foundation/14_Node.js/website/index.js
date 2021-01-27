const http = require('http');
const staticServer = require('../web/Begin/static-server.js');
const url = require('url');
const path = require('path');
const fs = require('fs');
const data = require('./stuInfo.js');

http.createServer((req, res) => {
    // 启动静态资源服务
    staticServer.initStaticServer(req, res, __dirname, '/www');
    // 判断请求路由
    if (req.url.startsWith('/query')) {
        let objUrl = url.parse(req.url, true);
        // 根据查询参数获取业务数据
        let stu = data[objUrl.query.stuCode];
        if (stu) {
            // 读取模板内容
            fs.readFile(path.join(__dirname, './template.html'), 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // 用模板和数据动态生成html页面
                let html = data.replace('$stuCode$', objUrl.query.stuCode);
                html = html.replace('$name$', stu.name);
                html = html.replace('$age$', stu.age);
                html = html.replace('$sex$', stu.sex);
                // 响应到浏览器端
                res.end(html);
            });
        } else {
            // 解决浏览器端接收到的数据和服务器端编码不一致的问题
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf8'
            });
            res.end('没有查询到该学生的相关数据');
        }
    }
}).listen(3000, () => {
    console.log('running...');
});