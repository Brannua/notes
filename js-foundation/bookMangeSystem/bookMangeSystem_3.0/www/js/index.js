$(() => {
    function initList(editBook, deleteBook) {
        $.ajax({
            type: 'get',
            url: '/allBooks', //调接口
            dataType: 'json',
            success: (data) => {
                /**
                 * 基于art-template模板在前端渲染页面
                 * @param template 模板id
                 * @param {list:data} 模板根据list属性遍历data数据
                 */
                let html = template('template', {
                    list: data
                });
                $('tbody').eq(0).html(html);

                /**
                 * 页面渲染完后才可以进行编辑和删除操作
                 */
                // 编辑绑事件
                $('tbody td a:even').click(function () {
                    let eid = $(this).attr('eid');
                    editBook(eid);
                })
                // 删除绑事件
                $('tbody td a:odd').click(function () {
                    let did = $(this).attr('did');
                    deleteBook(did);
                })
            }
        });
    }
    initList(editBook, deleteBook);

    /**
     * DOM结构重置
     * @param jq 传入的Jquery对象
     * @param dom 传入的DOM对象
     */
    function resetDom(jq, dom) {
        jq.css('display', 'none');
        document.body.appendChild(dom);
    }

    /**
     * 编辑功能
     */
    function editBook(eid) {
        $.ajax({
            type: 'GET',
            url: '/toEditBook',
            data: {
                "id": eid
            },
            dataType: 'json',
            success: (data) => {
                // 调用toEditBook接口根据eid返回数据

                let $FormData = $('#formData');
                let oFormData = $FormData.get(0);
                $FormData.css('display', 'block');

                let $inputs = $FormData.find('input');
                $($inputs[0]).attr('value', data.name);
                $($inputs[1]).attr('value', data.author);
                $($inputs[2]).attr('value', data.category);
                $($inputs[3]).attr('value', data.desc);

                // 编辑图书的弹窗功能
                layer.open({
                    content: transAddBookDomToStr(oFormData),
                    title: "编辑图书",
                    btn: ['提交', '取消'],
                    //提交按钮的回调
                    yes: function (index, layero) {
                        // 编辑过后的图书表单信息
                        let eData = $('.layui-layer-content #formData').serialize() + '&id=' + eid;
                        $.ajax({
                            type: 'post',
                            url: '/editBook',
                            data: eData,
                            dataType: 'json',
                            success: (data) => {
                                if (data.status === '1') {
                                    resetDom($FormData, oFormData);
                                    initList(editBook, deleteBook);
                                    layer.close(index);
                                }
                            }
                        });
                    },
                    //取消按钮的回调
                    btn2: function (index, layero) {
                        resetDom($FormData, oFormData);

                        //return false 开启该代码可禁止点击该按钮关闭
                    },
                    //右上角关闭回调
                    cancel: function () {
                        resetDom($FormData, oFormData);

                        //return false 开启该代码可禁止点击该按钮关闭
                    }
                });
            }
        })
    }


    /**
     * 删除功能
     */
    function deleteBook(did) {
        layer.confirm('确定删除这条图书信息吗？', {
            btn: ['确定', '取消'] //按钮
        }, () => {
            $.ajax({
                type: 'POST',
                url: '/deleteBook',
                data: {
                    "id": did
                },
                dataType: 'json',
                success: (data) => {
                    if (data.status === '1') {
                        initList(editBook, deleteBook);
                        layer.msg('删除成功！', {
                            icon: 1
                        });
                    }
                }
            })

        }, () => {
            layer.msg('已取消~', {
                time: 1000 //20s后自动关闭
            });
        });
    }


    /**
     * 将添加图书的DOM结构转化为字符串
     */
    function transAddBookDomToStr(dom) {
        let odiv = document.createElement('div');
        odiv.appendChild(dom);
        return odiv.innerHTML;
    }

    $("#addBook").click(() => {

        let $FormData = $('#formData');
        let oFormData = $FormData.get(0);
        /**
         * 清空数据
         */
        let inputsArr = $(oFormData).children('input'),
            len = inputsArr.length;
        for (let i = 0; i < len; i++) {
            $(inputsArr[i]).attr('value', '');
        }

        $FormData.css('display', 'block');
        // 添加图书的弹窗功能
        layer.open({
            content: transAddBookDomToStr(oFormData),
            btn: ['提交', '取消'],
            //提交按钮的回调
            yes: function (index, layero) {
                // 将要添加的图书表单信息
                let formData = $($('.layui-layer-content').find('#formData')[0]).serialize();
                $.ajax({
                    type: 'post',
                    url: '/addBook',
                    data: formData,
                    dataType: 'json',
                    success: function (data) {
                        // 判断后端返回的状态位
                        if (data.status == '1') {
                            resetDom($FormData, oFormData);
                            layer.close(index);
                            // 刷新图书列表
                            initList(editBook, deleteBook);
                        }
                    }
                })
            },
            //取消按钮的回调
            btn2: function (index, layero) {
                resetDom($FormData, oFormData);

                //return false 开启该代码可禁止点击该按钮关闭
            },
            //右上角关闭回调
            cancel: function () {
                resetDom($FormData, oFormData);

                //return false 开启该代码可禁止点击该按钮关闭
            }
        });

    });

    /**
     * 天气查询功能
     */
    $('#weather').click(() => {
        let cityName = $('#cityName').val();
        $.ajax({
            type: 'GET',
            url: '/weather',
            data: {
                "cityName": cityName
            },
            dataType: 'json',
            success: (data) => {
                // 弹窗显示信息TODO...
            }
        });
    });
});