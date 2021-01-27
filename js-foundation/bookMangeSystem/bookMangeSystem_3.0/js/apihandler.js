/**
 * 封装独立的天气查询模块
 */

const http = require('http');

let options1 = {
    hostname: 'apis.baidu.com',
    port: 80,
    path: '/apistore/weatherservice/cityinfo',
    headers: {
        'apikey': 'ad247fa9b5faf9146d51c87f5f3d96ec'
    }
}

let options2 = {
    hostname: 'apis.baidu.com',
    port: 80,
    path: '/apistore/weatherservice/cityid',
    headers: {
        'apikey': 'ad247fa9b5faf9146d51c87f5f3d96ec'
    }
}

let queryData = (options, callback) => {
    // 发送请求
    http.request(options, (res) => {
        let result = '';
        res.on('data', (chunk) => {
            result += chunk;
        });
        res.on('end', () => {
            let obj = JSON.parse(result);
            callback(obj);
        });
    }).end();
}

exports.queryCityCode = (cityname, callback) => {
    options1.path = options1.path + '?cityname=' + encodeURI(cityname);
    queryData(options1, callback)
}

exports.queryWeather = (cityCode, callback) => {
    options2.path = options2.path + '?cityid=' + cityCode;
    queryData(options2, callback);
}