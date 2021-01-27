/* 

    对静态服务器进行封装

*/
// const http = require('http');
const path = require('path');
const fs = require('fs');
// 为处理页面加载资源的文件扩展名不同, 根据不同文件资源给响应头设置资源渲染方式和编码字符集
const mime = require('mime');

// 静态资源目录
let assetsDir = '/myFirstNodejsDemo';
// 优化
let rootDir = 'C:\\Users\\Administrator\\Desktop';
// 访问资源不存在处理
let info404 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>404</title>
</head>
<body>
    <div>页面走丢了</div>
</body>
</html>
`;

exports.initStaticServer = (req, res, rootDir, assetsDir)=>{
    if (req.url.startsWith(assetsDir)) {
        // 根据浏览器端url请求的资源路径来读取相应的文件并返回给客户端
        let fileName = path.basename(req.url);
        let toBeReadFilePath = path.join(rootDir, assetsDir, fileName);
        fs.readFile(toBeReadFilePath, (err, data) => {
            if (err) {
                res.end(info404);
                console.log(err);
                return;
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
}