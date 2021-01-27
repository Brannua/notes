/**
 * get方式传递参数 + 从服务器主动发送请求 + 向./api.js发送
 */

const http = require('http');
let options = {
    hostname: 'localhost',
    port: 3000,
    path: '/getapi?flag=123'
}
http.get(options, (res) => {
    let result = '';
    res.on('data', (chunk) => {
        result += chunk;
    });
    res.on('end', ()=>{
        console.log(result);
    })
});