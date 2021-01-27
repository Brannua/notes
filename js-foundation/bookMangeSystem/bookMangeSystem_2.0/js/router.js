const express = require('express');
const app = express();

/* 加载路由管理的具体逻辑实现模块 */
const handler = require('./handler.js');

app.get('/', (req, res) => { //访问主页
    handler.showIndex(res);
});
app.get('/toAdd', (req, res) => { //跳转到添加书籍的页面
    handler.showToAdd(res);
});
app.get('/toEdit', (req, res) => { //跳转到编辑页面
    handler.showToEdit(req, res);
});
app.get('/deleteBook', (req, res) => { //删除图书信息
    handler.deleteBook(req, res);
});
app.post('/addBook', (req, res) => { //添加书籍
    handler.addBook(req, res);
});
app.post('/editBook', (req, res) => { //保存编辑的图书信息
    handler.showEditBook(req, res);
});
// 导出方法体
module.exports = app;