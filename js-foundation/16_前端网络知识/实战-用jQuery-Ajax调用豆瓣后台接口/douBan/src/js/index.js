/* DOM加载完毕后 */
$(() => {
    /* 获取输入框 */
    var $search = $('.search'),
        /* 获取联想词下拉菜单 */
        $ul = $('.list');
    /* 输入框监听输入 */
    $search.on('input', function () {
        /* 获取输入信息 */
        let value = $(this).val();
        /* 发送ajax请求 */
        getData(value, 7);
    });

    /**
     * 发送ajax请求
     * @param {*} value 搜索关键词
     * @param {*} num 设置返回数据的条数
     */
    function getData(value, num) {
        $.ajax({
            type: "GET",
            url: "https://api.douban.com/v2/music/search",
            dataType: 'jsonp',
            data: "q=" + value + "&count=" + num,
            success: addItem,
            error: errHandler
        })
    }
    /* 成功处理函数 */
    function addItem(data) {
        /* 获取音乐数据数组 */
        var list = data.musics;
        var str = '';
        list.forEach((elem, index) => {
            let musicUrl = elem.image;
            console.log(elem);
            str += '<li><a href="https://music.douban.com/subject/'+  +'/"><img src='+ musicUrl +'></a></li>';
        });
        $ul.html(str);     
    }
    /* 失败处理函数 */
    function errHandler(err) {
        console.log(err);
    }
});