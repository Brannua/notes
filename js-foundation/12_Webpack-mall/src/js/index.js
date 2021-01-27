require('../less/index.less');
require('jquery');

/**
 * jq发送ajax请求获取商品列表数据
 */
function getGoodsList() {
    $.ajax({
        type: 'GET',
        url: 'http://www.api.com/',
        success: function (data) {
            createList(data);
        }
    })
};

// getGoodsList();

/**
 * 获取到商品列表数据后的渲染函数
 */
function createList(data) {
    data.list.forEach((elem, index) => {
        let str = `<a href="http://localhost:8080/goodsInfo.html?id=${elem.id}">
                    <div class="goods_item">
                        <img src="${elem.img.url[index]}" alt="">
                        <p class="item_name">
                            ${elem.name}
                        </p>
                        <p class="item_price">
                            ${elem.price}
                        </p>
                    </div>
                </a>`
        $('.tab_content').html(str);
    })
}