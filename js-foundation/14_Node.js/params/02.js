/* 

    从服务器角度获取get请求参数

*/
const http = require('http');
const url = require('url');
const staticServer = require('../web/Begin/static-server.js');

http.createServer((req, res) => {
    staticServer.initStaticServer(req, res, __dirname, '/www');
    if (req.url.startsWith('/test')) {
        // 请求url转化成对象形式
        let reqUrlObj = url.parse(req.url, true);
        if (reqUrlObj.query) { //确保输入了用户名密码

            let username = reqUrlObj.query.username;
            let password = reqUrlObj.query.password;
            // 设置响应头来解决页面渲染的乱码问题
            res.writeHead(200, {
                'Content-type':'text/plain; charset=utf8'
            });
            if (username === 'brannua' && password === '123') {
                res.end('登录成功');
            } else {
                res.end('用户名或密码错误');
            }
        }

    }
}).listen(3000, () => {
    console.log('running...');
});