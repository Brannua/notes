/* 
    url参数解析方式
    url.format(urlObject)
    url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
*/
const url = require('url');

// let str1 = 'https://www.taobao.com:8080/abc/eee/ddd/fff?key=123&word=javascript#id';
// let obj1 = url.parse(str1, true);//第二个参数true表示把query属性变成对象形式
// console.log(obj1); 
// {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.taobao.com:8080',
//     port: '8080',
//     hostname: 'www.taobao.com',
//     hash: '#id',
//     search: '?key=123&word=javascript',
//     query: [Object: null prototype] { key: '123', word: 'javascript' },
//     pathname: '/abc/eee/ddd/fff',
//     path: '/abc/eee/ddd/fff?key=123&word=javascript',
//     href: 'https://www.taobao.com:8080/abc/eee/ddd/fff?key=123&word=javascript#id' 
// }

// let str2 = '//foo/bar';
// let obj2 = url.parse(str2, true, true); //测试第三个参数的作用
// console.log(obj2);
// {
//     protocol: null,
//     slashes: true,
//     auth: null,
//     host: 'foo',
//     port: null,
//     hostname: 'foo',
//     hash: null,
//     search: null,
//     query: [Object: null prototype] {},
//     pathname: '/bar',
//     path: '/bar',
//     href: '//foo/bar' 
// }

/* 
    测试url.format()的作用
*/
let o = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.taobao.com:8080',
    port: '8080',
    hostname: 'www.taobao.com',
    hash: '#id',
    search: '?key=123&word=javascript',
    query: {
        key: '123',
        word: 'javascript'
    },
    pathname: '/abc/eee/ddd/fff',
    path: '/abc/eee/ddd/fff?key=123&word=javascript',
    href: 'https://www.taobao.com:8080/abc/eee/ddd/fff?key=123&word=javascript#id'
};
let str = url.format(o);
console.log(str);