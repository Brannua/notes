/* js模板引擎 */
const template = require('art-template');
/* 将字符串解析成为对象的querystring模块 */
const queryString = require('querystring');
/* url 模块用于处理与解析 URL */
const url = require('url');

const express = require('express');
const app = express();

app.use(express.static('www'));

// 这里的数据是假数据
let dataList = [{
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

// 计算数据列表中的id最大值
let countMax = (data) => {
    let arr = [];
    data.forEach((e) => {
        arr.push(e.id);
    });
    let max = Math.max.apply(null, arr);
    return max;
}

app.get('/', (req, res) => {
    let html = template(__dirname + '/view/index', {
        list: dataList
    });
    res.end(html);
});

app.get('/toAdd', (req, res) => {
    let html = template(__dirname + "/view/addBook", {});
    res.end(html);
});

app.post('/addBook', (req, res) => {
    // POST表单提交的数据
    // 基于事件的回调函数模式
    let formData = '';
    req.on('data', (chunk) => {
        formData += chunk;
    });
    req.on('end', () => {
        // 解析表单数据成为对象
        let obj = queryString.parse(formData);
        obj.id = countMax(dataList) + 1;
        dataList.push(obj);

        // 数据添加成功之后要跳转到主页面
        // 302表示http协议的状态码，用来重定向，location属性指定了重定向的地址
        res.writeHead(302, {
            'Location': '/'
        });
        res.end();
    });
});

app.get('/toEdit', (req, res) => {
    /* 获取所需编辑的图书id */
    let id = url.parse(req.url, true).query.id;
    let book = null;
    /* 根据id遍历查找dataList中的图书信息 */
    dataList.some((item) => {
        if (id == item.id) {
            book = item;
            /* 终止遍历 */
            return false;
        }
    });

    /* 动态生成页面进行渲染 */
    let html = template(__dirname + '/view/editBook', book || {});
    res.end(html);
});

app.post('/editBook', (req, res) => {
    /* 接收从编辑页POST过来的数据 */
    let formData = '';
    req.on('data', (chunk) => {
        formData += chunk;
    });

    req.on('end', () => {
        let obj = queryString.parse(formData);
        dataList.some((item) => {
            if (obj.id == item.id) {
                item.name = obj.name;
                item.author = obj.author;
                item.category = obj.category;
                item.desc = obj.desc;
                return false;
            }
        });
        // 重定向跳转到主页面
        res.writeHead(302, {
            'Location': '/'
        });
        res.end();
    });
});

app.get('/deleteBook', (req, res) => {
    // 获取查询参数中的id
    let id = url.parse(req.url, true).query.id;
    dataList.some((item, index) => {
        // 匹配id
        if (item.id == id) {
            // 删除数据列表中的一条数据
            dataList.splice(index, 1);
            // 终止遍历
            return false;
        }
    });
    // 重新从小到大排序
    dataList.forEach((item, index) => {
        item.id = index + 1;
    });
    // 重定向
    res.writeHead(302, {
        Location: '/'
    });
    res.end();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))