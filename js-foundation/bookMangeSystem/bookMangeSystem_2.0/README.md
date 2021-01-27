# bookMangeSystem_2.0

- 2019-8-18使用express
- 使用自己封装的静态资源服务器代码如下
----------------------------------
*index.js*
```
/* nodeJs核心模块http */
const http = require('http');
/* 自己封装的静态资源服务器 */
const initStaticServer = require('./static-server.js');
```
```
http.createServer((req, res) => {
    // 集中处理GET请求的参数
    req.query = url.parse(req.url, true).query;
    // 绑定渲染函数
    render(res);
    // 处理静态资源
    initStaticServer(req, res, () => {
        // 处理动态资源
        // 集中处理POST请求的参数
        bodyParser(req, () => {
            // 后续操作(回调函数->异步执行)
            // 在这里调用router是为了保证能够获取到bodyParser添加的body属性
            router(req, res);
        });
    });

}).listen(3000, () => {
    console.log("running");
});
```
*router.js*
```
/* 加载路由管理的具体逻辑实现模块 */
const handler = require('./handler.js');
// 导出方法体
module.exports = (req, res) => {
    if (req.url === '/' && req.method == 'GET') { //访问主页
        handler.showIndex(res);
    } else if (req.url === '/toAdd' && req.method == 'GET') { //跳转到添加书籍的页面
        handler.showToAdd(res);
    } else if (req.url === '/addBook' && req.method == 'POST') { //添加书籍
        handler.addBook(req, res);
    } else if (req.url.startsWith('/toEdit') && req.method == 'GET') { //跳转到编辑页面
        handler.showToEdit(req, res);
    } else if (req.url === '/editBook' && req.method == 'POST') { //保存编辑的图书信息
        handler.showEditBook(req, res);
    } else if (req.url.startsWith('/deleteBook') && req.method == 'GET') { //删除图书信息
        handler.deleteBook(req, res);
    }
}
```