/* 

    利用核心模块 http 实现服务器功能
    本机IP和localhost域名的对应关系在Hosts文件中

*/

const http = require('http');


/* 

    // 创建服务器
    http.createServer((req, res)=>{

        // 一旦服务器有响应, 就在浏览器端写入"hello world"
        res.write('Virous is writing to your computer...');
        // 终结请求
        res.end();

    // }).listen(3000, "127.0.0.1");//监听3000端口和IP地址(这里使用的是本机IP地址)

*/


/* 

    符合Node.js基于事件的异步回调设计理念
    采用事件队列的方式提高了性能

*/

// 创建服务器
let server = http.createServer();

// 一旦服务端接收到客户端的请求就回调(返回给浏览器端)
server.on('request', (req, res)=>{
    res.end('Hello Jerry');
});

// 监听端口和IP并在回调函数打印
server.listen(3000, '192.168.43.210', ()=>{
    console.log('running...');
});