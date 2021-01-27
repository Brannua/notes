/* 

    测试封装好的静态源服务器

*/
const http = require('http');
const staticServer = require('./Begin/static-server.js');

let rootDir = __dirname;
let assetsDir = '/www';
http.createServer((req, res) => {
    staticServer.initStaticServer(req, res, rootDir, assetsDir);
}).listen(3000, () => {
    console.log('running...');
});