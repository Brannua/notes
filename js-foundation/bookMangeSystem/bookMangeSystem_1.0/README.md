# bookMangeSystem_1.0

- 2019-8-18使用express
- 最初版本使用的是自己封装的静态资源服务器,采用以下代码

```
/* nodeJs核心模块http */
const http = require('http');
/* 自己封装的静态资源服务器 */
const sServer = require('./static-server.js');
```

```
http.createServer((req, res)=>{
    sServer.initStaticServer(req, res, __dirname, '/www');
    if(req.url === '/'){//访问主页
        let html = template(__dirname + '/view/index', {list: dataList});
        res.end(html);
    } else if (req.url === '/toAdd') {//跳转到添加书籍的页面
        let html = template(__dirname + "/view/addBook", {});
        res.end(html);
    } else if (req.url === '/addBook') {//添加书籍
        // POST表单提交的数据
        // 基于事件的回调函数模式
        let formData = '';
        req.on('data', (chunk)=>{
            formData += chunk;
        });
        req.on('end', ()=>{
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
        })
    } else if (req.url.startsWith('/toEdit')) {//跳转到编辑页面
        /* 获取所需编辑的图书id */
        let id = url.parse(req.url, true).query.id;
        let book = null;
        /* 根据id遍历查找dataList中的图书信息 */
        dataList.some((item)=>{
            if (id == item.id) {
                book = item;
                /* 终止遍历 */
                return false;
            }
        });

        /* 动态生成页面进行渲染 */
        let html = template(__dirname + '/view/editBook', book || {});
        res.end(html);
    } else if (req.url === '/editBook') {//保存编辑的图书信息
        /* 接收从编辑页POST过来的数据 */
        let formData = '';
        req.on('data', (chunk)=>{
            formData += chunk;
        });

        req.on('end', ()=>{
            let obj = queryString.parse(formData);
            dataList.some((item)=>{
                if(obj.id == item.id){
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
        })
    } else if (req.url.startsWith('/deleteBook')) {//删除图书信息
        // 获取查询参数中的id
        let id = url.parse(req.url, true).query.id;
        dataList.some((item, index)=>{
            // 匹配id
            if (item.id == id) {
                // 删除数据列表中的一条数据
                dataList.splice(index, 1);
                // 终止遍历
                return false;
            }
        });
        // 重新从小到大排序
        dataList.forEach((item, index)=>{
            item.id = index+1;
        });
        // 重定向
        res.writeHead(302, {
            Location: '/'
        });
        res.end();
    }
}).listen(3000, ()=>{
    console.log("running");
});
```