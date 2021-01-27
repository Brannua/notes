const http = require('http');

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

http.createServer((req, res) => {
    if (req.url == '/data') {
        res.writeHead(200, {
            'Content-Type':'text/plain;charset=UTF8'
        });
        // 把对象转化成字符串(JSON形式的字符串)
        let str = JSON.stringify(data);
        res.end(str);
    }
}).listen(3000, () => {
    console.log('Running...');
});