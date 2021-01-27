let dirname = __dirname.split('\\js')[0];
// 这里的数据是假数据
let dataList = require('./data.js');
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

exports.showIndex = (res) => {
    res.render(dirname + '/view/index', {
        list: dataList
    }, 200);
}

exports.showToAdd = (res) => {
    res.render(dirname + "/view/addBook", {}, 200);
}
exports.addBook = (req, res) => {
    /* 获取表单提交的数据 */
    let obj = req.body;
    obj.id = countMax(dataList) + 1;
    // 注意返回的是一个queryString对象，为了切断原型链上的联系
    // 使用深拷贝JSON.parse(JSON.stringify(str))
    dataList.push(JSON.parse(JSON.stringify(obj)));

    // 数据添加成功之后要跳转到主页面
    // 302表示http协议的状态码，用来临时重定向，location属性指定了重定向的地址
    res.render('/', null, 302);
}

exports.showToEdit = (req, res) => {
    /* 获取所需编辑的图书id */
    let id = req.query.id;
    let book = null;
    /* 根据id遍历查找dataList中的图书信息 */
    dataList.some((item) => {
        if (id == item.id) {
            book = item;
            /* 终止遍历 */
            return false;
        }
    });

    /* 动态生成页面进行渲染 */
    res.render(dirname + '/view/editBook', book || {}, 200);
}

exports.showEditBook = (req, res) => {
    let obj = req.body;
    dataList.some((item) => {
        if (obj.id == item.id) {
            item.name = obj.name;
            item.author = obj.author;
            item.category = obj.category;
            item.desc = obj.desc;
            return false;
        }
    });
    // 重定向跳转到主页面
    res.render('/', null, 302);
}

exports.deleteBook = (req, res) => {
    // 获取查询参数中的id
    let id = req.query.id;
    dataList.some((item, index) => {
        // 匹配id
        if (item.id == id) {
            // 删除数据列表中的一条数据
            dataList.splice(index, 1);
            // 终止遍历
            return false;
        }
    });
    // 重新从小到大排序
    dataList.forEach((item, index) => {
        item.id = index + 1;
    });
    // 重定向
    res.render('/', null, 302);
}