/**
 * @param {解析处理表单数据的模块} data 
 */
const data = require('./data');
const weather = require('./apihandler');
// 计算数据列表中的id最大值
let countMax = (data) => {
    if (data.length) {
        let arr = [];
        data.forEach((e) => {
            arr.push(e.id);
        });
        let max = Math.max.apply(null, arr);
        return max;
    } else {
        return 0;
    }
}

/**
 * 给前端返回当前所有数据
 */
exports.allBooks = (res) => {
    res.render(data);
}

/**
 * 增加后端数据
 */
exports.addBook = (req, res) => {
    // 增添数据
    let form = req.body;
    form.id = countMax(data) + 1;
    data.push(form);
    // 返回客户端
    res.render({
        "status": "1"
    });
}

/**
 * 根据id获取要编辑的图书数据
 */
exports.toEditBook = (req, res) => {
    let eid = req.query.split('=')[1];
    let book = null;
    data.forEach((item) => {
        if (item.id == eid) {
            book = item;
        }
    })
    // 返回客户端
    res.render(book);
}

/**
 * 根据id编辑图书信息
 */
exports.editBook = (req, res) => {
    let form = req.body;
    data.some((item) => {
        if (item.id == form.id) {
            item.name = form.name;
            item.author = form.author;
            item.category = form.category;
            item.desc = form.desc;
            return false;
        }
    })
    // 返回客户端
    res.render({
        "status": "1"
    });
}
/**
 * 根据id删除图书信息
 */
exports.deleteBook = (req, res) => {
    let did = req.body.id;
    data.some((item, index) => {
        if (item.id == did) {
            // 根据did删除数据
            data.splice(index, 1);
            // 终止进一步的遍历
            return false;
        }
    });
    // 删除数据后重新按顺序编排图书id
    data.forEach((item, index) => {
        item.id = index + 1;
    });
    // 返回客户端
    res.render({
        "status": "1"
    });
}

/**
 * 根据城市信息查询天气
 */
exports.queryWeather = (req, res) => {
    let cityName = req.query.cityName;
    weather.queryCityCode(cityName, (obj1) => {
        weather.queryWeather(obj1.retData.citycode, (obj2) => {
            res.render(obj2);
        });
    });
}