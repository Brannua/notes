const http = require('http');
const url = require('url'); //用来处理参数
const querystring = require('querystring'); //用来解析字符串为对象

let data = [{
    id: 1,
    name: "三国演义",
    author: "罗贯中",
    category: "文学",
    desc: "一个杀伐纷争的年代"
}, {
    id: 2,
    name: "水浒传",
    author: "施耐庵",
    category: "文学",
    desc: "草寇就是草寇"
}, {
    id: 3,
    name: "西游记",
    author: "吴承恩",
    category: "文学",
    desc: "佛教与道教的斗争"
}, {
    id: 4,
    name: "红楼梦",
    author: "曹雪芹",
    category: "文学",
    desc: "一个封建王朝的缩影"
}, {
    id: 5,
    name: "浪潮之巅",
    author: "吴军",
    category: "科普",
    desc: "IT巨头的兴衰史"
}];

function returnData(res, data) {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=UTF8'
    });
    // 把对象转化成字符串(JSON形式的字符串)
    let str = JSON.stringify(data);
    res.end(str);
}

http.createServer((req, res) => {
    if (req.url.startsWith('/getapi') && req.method == 'GET') {
        let obj = url.parse(req.url, true).query;
        // 判断参数是否正确
        if (obj && obj.flag == '123') {
            returnData(res, data);
        } else {
            res.end('{"status":"get_0"}');
        }
    } else if (req.url.startsWith('/postapi') && req.method == 'POST') {
        let params = '';
        req.on('data', (chunk) => {
            params += chunk;
        });
        req.on('end', () => {
            let obj = querystring.parse(params);
            // let obj = JSON.parse(params);
            if (obj && obj.flag == 'abc') {
                returnData(res, data);
            } else {
                res.end('{"status":"post_0"}');
            }
        });
    }
}).listen(3000, () => {
    console.log('Running...');
});