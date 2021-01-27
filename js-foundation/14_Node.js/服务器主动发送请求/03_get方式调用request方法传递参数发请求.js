const http = require('http');
let options = {
    hostname: 'localhost',
    port: 3000,
    path: '/getapi?flag=123'
}

let req = http.request(options, (res)=>{
    let result = '';
    res.on('data', (chunk) => {
        result += chunk;
    });
    res.on('end', ()=>{
        console.log(result);
    })
});

req.end();

/**
 * 从本质来看,get()是对request()进行了一层封装
 * 功能层面二者相似
 * get()较为简洁
 */