/* 页面一旦加载立即调用立即执行函数,请求回数据 */
(function () {
    // 获取四列图片的类数组
    var oBox = document.getElementsByClassName('box');
    /* 
        给用户滚动滚轮发送ajax请求加锁( flag )
        ( 防止网络状态不好用户多次往底部滚动滚轮
        造成重复发送ajax请求致使响应数据过多的问题 )
    */
    var flag = false;
    /* * 
     * 获取数据的页码
     */
    var cpage = 1;

    /* *
     * 初始化调用getData入口函数并向后台发送ajax请求,
     * 后台调用接口向前端返回数据
     */
    function getData() {
        ajaxFunc('GET', 'http://localhost/web/network/ajax/waterfall/src/js/getPics.php', 'cpage=' + cpage, addDom, true)
        /* 由于频繁调用接口会被限制,故将数据存入data.json作为假数据进行数据请求 */
        // ajaxFunc('GET', 'http://localhost/web/network/ajax/waterfall/src/js/data.json', 'cpage=1', addDom, true);
    }

    /* *
     * 回调函数处理数据
     */
    function addDom(data) {
        // 开锁( 因为此时ajax请求已经响应回数据 )
        flag = false;
        // 返回的数据转成数组格式
        var ArrData = JSON.parse(data).data;
        console.log(ArrData);
        // 数据格式数组遍历
        ArrData.forEach(function (ele) {
            // 根据每一条数据创建将要插入的DOM结构
            var oItem = document.createElement('div'),
                oCont = document.createElement('div'),
                oImg = new Image(),
                oP = document.createElement('p');
            oP.innerText = ele.tag;
            oItem.className = 'item';
            oCont.className = "cont";
            oImg.src = ele.url;
            
            oImg.onerror = function () {
                this.style.width = "202px";
                this.style.height = "202px";
                this.style.margin = "-1px";
            }
            oItem.appendChild(oCont);
            oCont.appendChild(oImg);
            oItem.appendChild(oP);
            // 获取最短列的索引
            var minList = getMinList(oBox);
            // 最短列插入DOM结构
            oBox[minList].appendChild(oItem);
        });
    }

    /* *
     * 获取最短列的处理函数
     */
    function getMinList(doms) {
        // 先把第一列当做最短列,保存第一列的高度
        var minHeight = doms[0].offsetHeight;
        // 用于保存最短列的索引值,用于返回
        var index = 0;
        // 循环遍历234列
        for (var i = 1; i < doms.length; i++) {
            var newHeight = doms[i].offsetHeight;
            // 从第二列开始逐列和最短列比较
            if (newHeight < minHeight) {
                // 更新最短列
                minHeight = newHeight;
                // 更新最短列的索引值
                index = i;
            }
        }
        // 返回最短列的索引值
        return index;
    }

    /* *
     * 监听鼠标滑轮事件
     */
    window.onscroll = function () {
        // 滚动条滚过去的距离
        var scrollHeight = document.documentElement.scrollTop ||
            document.body.scrollTop;
        // 当前视口的高度
        var clientHeight = document.documentElement.clientHeight ||
            document.body.clientHeight;
        // 获取最短列的高度
        var pageHeight = oBox[getMinList(oBox)].offsetHeight;
        if (scrollHeight + clientHeight > pageHeight) {
            if (!flag) {
                /* 获取下一页数据 */
                cpage++;
                /* 获取数据 */
                getData();
                /* 加锁防止多次重复发送ajax请求 */
                flag = true;
            }
        }
    }
    // 调用初始化入口函数
    getData();
})()