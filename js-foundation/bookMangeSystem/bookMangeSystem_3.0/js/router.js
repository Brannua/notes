const express = require('express');
const app = express();

const handler = require('./handler');

// module.exports = (req, res) => {
//     if (req.url === '/allBooks' && req.method === 'GET') {
//         handler.allBooks(res);
//     } else if (req.url === '/addBook' && req.method === 'POST') {
//         handler.addBook(req, res);
//     } else if (req.url.startsWith('/toEditBook') && req.method === 'GET') {
//         handler.toEditBook(req, res);
//     } else if (req.url === '/editBook' && req.method === 'POST') {
//         handler.editBook(req, res);
//     } else if (req.url.startsWith('/deleteBook') && req.method === 'POST'){
//         handler.deleteBook(req, res);
//     } else if (req.url.startsWith('/weather') && req.method === 'GET') {
//         handler.queryWeather(req, res);
//     }
// }

app.get('/allBooks', (req, res) => { //访问主页
    handler.allBooks(res);
});
app.get('/toEditBook', (req, res) => { //跳转到编辑页面
    handler.toEditBook(req, res);
});
app.get('/weather', (req, res) => { //查询天气
    handler.queryWeather(req, res);
});
app.post('/deleteBook', (req, res) => { //删除图书信息
    handler.deleteBook(req, res);
});
app.post('/addBook', (req, res) => { //添加书籍
    handler.addBook(req, res);
});
app.post('/editBook', (req, res) => { //保存编辑的图书信息
    handler.editBook(req, res);
});
// 导出方法体
module.exports = app;