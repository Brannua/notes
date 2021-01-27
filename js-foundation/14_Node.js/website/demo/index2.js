/* 
    模板引擎art-template
    
    模板 + 数据 = 静态页面
*/
const template = require('art-template');
// ------------------------------------------------------------------------
// let data = {
//     title: '标签',
//     list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
// };
// ------------------------------------------------------------------------
let data = {
    title: '学生',
    list: [{
        name: 'zhangsan',
        sex: 'male',
        age: 18
    },
    {
        name: 'lisi',
        sex: 'male',
        age: 19
    },{
        name: 'wangwu',
        sex: 'female',
        age: 20
    },
    {
        name: 'zhaoliu',
        sex: 'male',
        age: 21
    }]
};
// ------------------------------------------------------------------------
/* 
    两种语法
*/
// let html = template(__dirname + '/template1', data);
// console.log(html);
// ------------------------------------------------------------------------
let render = template(__dirname + '/template2');
let html = render(data);
console.log(html);