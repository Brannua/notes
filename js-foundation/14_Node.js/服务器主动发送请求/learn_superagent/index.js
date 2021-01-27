const request = require('superagent');

// request.get('http://www.baidu.com') //完整的url
//     .query({}) //参数
//     .set({
//         apikey: ''
//     }) //请求头
//     .end((err, res) => {
//         if (!err) {
//                 console.log('ok');
//         }
//     })

// -----------------------------------------------------------------

// request.post('http://localhost:3000/postapi')
//     .send('flag=abc')
//     // .send({"flag":"abc"})
//     .end((err, res) => {
//         if (!err) {
//             console.log(res.text)
//         }
//     });

// -----------------------------------------------------------------

request.get('http://localhost:3000/getapi')
    .query({
        flag: 123
    })
    .end((err, res) => {
        if (!err) {
            console.log(res.text);
        }
    })