const http = require('http');
const querystring = require('querystring');

// post请求的参数
let postData = querystring.stringify({
    'flag': 'abc'
})

let options = {
    hostname: 'localhost',
    port: 3000,
    path: '/postapi',
    method: 'POST',
    // headers也可以不设置
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

// 发送请求
let req = http.request(options, (res) => {
    let result = '';
    res.on('data', (chunk) => {
        result += chunk;
    });
    res.on('end', () => {
        console.log(result);
    })
});
// 写入post请求的参数
req.write(postData);
// end()完成发送请求
req.end();