/**
 * 路由级别的中间件
 * 挂载方式 ==> use
 * 路由方式:
 * get post put delete
 */
const express = require('express');
const app = express();
/* 
    // 一个路由可以包含多个中间件
    app.get('/abc', (req, res, next) => {
        console.log(1);
        // 将处理权限传递给下一个中间件
        // next();
        // 将处理权限传递给下一个同名路由
        next('route');
    }, (req, res) => {
        console.log(2);
        res.send('abc');
    })

    app.get('/abc', (req, res)=>{
        console.log(3);
        res.send('Hello');
    });
*/
// --------------------------------------
var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

var cb2 = function (req, res) {
    res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])


app.listen(3000, () => {
    console.log('running at port 3000');
})