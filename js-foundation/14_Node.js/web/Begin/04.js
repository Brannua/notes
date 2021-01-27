/* 

    实现静态服务器的功能

*/
const http = require('http');
const path = require('path');
const fs = require('fs');
// 静态资源目录
let assetsDir = '../www';
// 为处理页面加载资源的文件扩展名不同, 根据不同文件资源给响应头设置资源渲染方式和编码字符集
const mime = require('mime');

http.createServer((req, res) => {
    if (req.url.startsWith('/www')) {
        // 根据浏览器端url请求的资源路径来读取相应的文件并返回给客户端
        let fileName = path.basename(req.url);
        fs.readFile(path.join(__dirname, assetsDir, fileName), (err, data) => {
            if (err) {
                console.log(err);
                console.log('请求服务器错误,请重试');
            } else {
                let cType = 'text/html';//默认用这个
                
                let ext = path.extname(req.url);//获取req的文件扩展名
                // 利用mime对文件的扩展名的操作判断当前访问的资源文件类型
                if (mime.getType(ext)) {
                    cType = mime.getType(ext);//增加代码的健壮性
                }
                // 文本资源需要指定编码字符集
                if (mime.getType(ext).startsWith('text')) {
                    cType += '; charset=utf8';
                }

                // 向请求发送响应头
                res.writeHead(200, {
                    'Content-type': cType
                });
                
                // res返回响应数据
                res.end(data);
            }
        });
    }
}).listen(3000, () => {
    console.log('running...');
});