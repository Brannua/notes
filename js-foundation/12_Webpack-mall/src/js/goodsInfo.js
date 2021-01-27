require('../less/goodsInfo.less');

/**
 * jq发送ajax请求获取当前id对应的商品的详情数据
 */
(function getGoodInfo() {
    $.ajax({
        type: 'GET',
        url: 'http://www.api.com',
        success: function (data) {
            createGoodInfo(data);
        }
    })
})();

/**
 * 用来获取具体商品id值的方法
 */
function getId() {
    let optionList = location.search.slice(1).split("&");
    let idNum;
    optionList.forEach(function (elem, index) {
        if (elem.indexOf("id") !== -1) {
            idNum = elem.slice(3);
        }
    });
    return idNum;
}

/**
 * @param {渲染函数} data 获取到的商品列表数据( 待遍历比较id )
 */
function createGoodInfo(data) {
    let dataList = data.list,
        len = dataList.length;
    /* 
    由于这里我们获取到的是全部的商品信息,所以需要遍历数据对比id那到具体的数据
    但其实正常开发中我们是将id传给后端,后端直接返回的就是具体的某一条数据
    我们直接渲染即可,不需要遍历
    */
    let id = getId();
    for (let i = 0; i < len; i++) {
        if (dataList[i].id == id) {
            $('.info_one_img').html('<img src="' + dataList[i].imgUrl + '"></img>');
            $('.one_name').html(dataList[i].name);

            dataList.spectList.sort(sortSpectPrice('price'));
            $('.one_price').html('￥' + dataList[i].spectList[0].price + '-' + dataList[i].spectList[dataList[i].spectList.length - 1].price);

            
        }
    }
}
/**
 * @param {定义sort函数的排序规则} str 按照哪一个属性排序
 */
function sortSpectPrice(str) {
    return function (a, b) {
        return a[str] - b[str];
    }
}