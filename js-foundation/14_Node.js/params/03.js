/* 
    从服务器角度获取post提交参数
    querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具
        querystring.parse(str[, sep[, eq[, options]]])
*/
const http = require('http');
const staticServer = require('../web/Begin/static-server.js');
const querystring = require('querystring');

http.createServer((req, res) => {
    // 启动静态服务器功能
    staticServer.initStaticServer(req, res, __dirname, '/www');
    if (req.url.startsWith('/test')) {
        let postData = '';
        // (基于事件的回调函数模式)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // 回调函数接受到一部分数据就触发一次
        req.on('data', (chunk) => {
            postData = postData + chunk;
        });
        // 回调函数接受到所有的数据才调用end对应的回调函数
        req.on('end', ()=>{
            let obj = querystring.parse(postData);
            let username = obj.username;
            let password = obj.password;
            // 设置响应头来解决页面渲染的乱码问题
            res.writeHead(200, {
                'Content-type':'text/plain; charset=utf8'
            });
            if (username === 'brannua' && password === '123') {
                res.end('登录成功');
            } else {
                res.end('用户名或密码错误');
            }
        });
    }
}).listen(3000, () => {
    console.log('running...');
});