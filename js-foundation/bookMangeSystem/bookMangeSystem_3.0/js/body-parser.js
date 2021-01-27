/* 
    统一处理表单提交的数据
*/
/* 将字符串解析成为对象的querystring模块 */
const queryString = require('querystring');
module.exports = (req, next) => {
    // POST请求的处理方式
    if (req.method == 'POST') {
        let formData = '';
        req.on('data', (chunk) => {
            formData += chunk;
        });
        req.on('end', () => {
            let obj = queryString.parse(formData);
            // 向req对象追加一个body属性,表示请求体中的数据
            req.body = obj;
            // 后续操作(回调函数)
            next();
        });
    } else {
        // 非POST请求的处理方式
        req.body = {};
        next();
    }
}