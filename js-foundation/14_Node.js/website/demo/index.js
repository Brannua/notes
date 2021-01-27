/* 
    模板引擎art-template
    
    模板 + 数据 = 静态页面
*/
const template = require('art-template');

let data = {
    stuCode: 'no123',
    name: 'wangwu',
    sex: 'male',
    age: 19
}
let html = template(__dirname + '/template.art', data);
console.log(html);