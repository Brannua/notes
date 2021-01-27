const http = require('http');
const staticServer = require('../web/Begin/static-server.js');
const url = require('url');
const path = require('path');
const fs = require('fs');
const data = require('./stuInfo.js');
// 引入模板引擎art-template
const template = require('art-template');

http.createServer((req, res) => {
    // 启动静态资源服务
    staticServer.initStaticServer(req, res, __dirname, '/www');
    // 判断请求路由
    if (req.url.startsWith('/query')) {
        let objUrl = url.parse(req.url, true);
        // 根据查询参数获取业务数据
        let stu = data[objUrl.query.stuCode];
        if (stu) {
            // 利用模板引擎art-template动态生成html页面
            let html = template(__dirname + '/template1.art', stu);
            res.end(html);
        } else {
            // 解决浏览器端接收到的数据和服务器端编码不一致的问题
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf8'
            });
            res.end('没有查询到该学生的相关数据');
        }
    } else if (req.url.startsWith('/all')) {
        let info = [];
        for (key in data) {
            info.push(data[key]);
        }
        let html = template(__dirname + '/template2.art', {list:info});
        res.end(html);
        /* 
            如果不明白为什么用上面的forin循环进行数据格式处理
            就打印一下以下两行看看就知道啦
        */
        // console.log(data);
        // console.log(info);
    }
}).listen(3000, () => {
    console.log('running...');
});