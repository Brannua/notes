/* js模板引擎 */
const template = require('art-template');
module.exports = (res) => {
    /* 集中处理渲染逻辑,根据视图路径和数据进行渲染 */
    res.render = (viewPath, data, statusCode) => {
        // 处理普通的页面响应方法
        if (statusCode == 200) {
            let html = template(viewPath, data || {});
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf8'
            })
            res.end(html);
        } else if (statusCode == 302) {
            // 处理重定向响应
            res.writeHead(302, {
                Location: viewPath
            });
            res.end();
        }
    }
}