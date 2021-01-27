const request = require('request');
const fs = require('fs');

// request('http://www.baidu.com', (err, res, body) => {
//     if (!err && res.statusCode === 200) {
//         fs.writeFile('./baidu.html', body, ()=>{
//             console.log('finished');
//         });
//     }
// })

// --------------------------------------------------------------

// options = {
//     url: 'http://localhost:3000/getapi',
//     qs: {
//         "flag": 123
//     }
// }
// request.get(options, (err, res, body) => {
//     if (!err && res.statusCode == 200) {
//         console.log(body);
//     }
// });

// --------------------------------------------------------------

options = {
    url: 'http://localhost:3000/postapi',
    form: {
        "flag": 'abc'
    }
}
request.post(options, (err, res, body) => {
    if (!err && res.statusCode == 200) {
        console.log(body);
    }
});