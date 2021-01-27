/* 
    手动封装兼容性ajax
*/
/* params(请求方式,地址,data,回调函数,是否异步) */
function ajaxFunc(method, url, data, callback, flag) {

    /* 兼容的AJAX对象 */
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else { //兼容IE
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }


    /* 转大写 */
    method = method.toUpperCase();
    /* 发送请求 */
    if (method == 'GET') {
        /* 设置时间戳以便获取最新数据而不使用浏览器缓存 */
        var date = new Date(),
            timer = date.getTime();
        xhr.open(method, url + "?" + data + "&timer=" + timer, flag);
        xhr.send();
    } else if (method == 'POST') {
        xhr.open(method, url, flag);
        //设置请求头,使用form表单的默认编码格式
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
    // console.log(xhr.resposeText);//在这里由于ajax请求的发送是异步操作,发送后还没有接收到服务端响应,故打印不出值


    /* 监听响应数据 */
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(xhr.responseText);
            }
        }
    }


}