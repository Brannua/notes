/**
 * 从服务器主动发送请求
 */

const http = require('http');
const fs = require('fs');
let options = {
    hostname: 'www.baidu.com',
    port: 80
}
http.get(options, (res) => {
    let result = '';
    res.on('data', (chunk) => {
        result += chunk;
    });
    res.on('end', ()=>{
        fs.writeFile('./baidu.html', result, ()=>{
            console.log('finished');
        });
    })
});