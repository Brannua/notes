/**
 * 给前端返数据的独立模块
 */
module.exports = (res) => {
    res.render = (data) => {
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf8;'
        });
        res.end(JSON.stringify(data || {}));
    }
}