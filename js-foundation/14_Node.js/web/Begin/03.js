/* 

    创建服务器的细节分析
    http.IncomingMessage 类
    http.ServerResponse 类

*/

const http = require('http');


// req是http.IncomingMessage的实例化对象
// res是http.ServerResponse的实例化对象
http.createServer((req, res) => {

    /* 
    
        // 打印出全部的请求头信息
        // console.log(req);
        // 打印出headers里面的信息
        // console.log(req.headers);
        // 打印出请求的域名下的子路径
        // console.log(req.url);

        // 向浏览器返回'hello'
        // res.end('hello');
    
    */

    /*  */
    // 可通过条件判断的方式根据不同的请求返回不同的响应
        // 即导航功能(路由管理)
    if(req.url.endsWith('index.html')) {
        res.end('index.html');
    } else if (req.url.endsWith('about.html')) {
        res.end('about.html');
    } else {
        res.end('Sorry but can not find any pages.');
    }

}).listen(3000, () => {
    console.log('runninig...');
})