/**
 * 调用标准的第三方接口
 */

const http = require('http');

let options = {
    hostname: 'apis.baidu.com',
    port: 80,
    path: '/apistore/weatherservice/cityid?cityid=101010100',
    headers: {
        'apikey': 'ad247fa9b5faf9146d51c87f5f3d96ec'
    }
}

// 发送请求
let req = http.request(options, (res) => {
    let result = '';
    res.on('data', (chunk) => {
        result += chunk;
    });
    res.on('end', () => {
        let obj = JSON.parse(result);
        console.log(obj.retData.cityCode);
    });
});
// end()完成发送请求
req.end();