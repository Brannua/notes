# note

## storage

- localstorage( 永久存储,除非手动删除 )
    - 存储数据的方式
        ```
        localStorage.name = 'Brannua';
        localStorage.info = JSON.stringify({"name":"Brannua", "age":18});
        ```

- sessionstorage( 临时存储,窗口关闭就没有了 )
    - 存储数据的方式
        ```
        sessionStorage.name = 'Brannua';
        sessionStorage.info = JSON.stringify({"name":"Brannua", "age":18});
        ```

- API
    - setItem(name, val);// 设置属性值
    - getItem(name);// 获得属性值
    - removeItem(name);// 移除属性值
    - clear();// 清除全部属性

> 两种storage都必须满足同源策略,而且sessionStorage只能在同一窗口下读写

## cookie

> 参见网络部分笔记

-----------------
## storage 和 cookie 对比

|特性|cookie|localStorage|sessionStorage|
|:--:|:--:|:--:|:--:|
|数据的生命周期|一般由服务器生成,可以设置失效时间,如果在浏览器端生成cookie,默认关闭浏览器后失效|除非被清除,否则永久保存|仅在当前会话下有效,关闭页面或浏览器后失效|
|存放数据的大小|4k左右|一般为5M|一般为5M|
|与服务端的通信|每次都会携带在http头中,如果使用cookie保存过多数据会带来性能问题|仅在浏览器端保存,不参与和服务器的通信|仅在浏览器端保存,不参与和服务器的通信|
|易用性|需要程序员自己封装,原生cookie接口不友好|原生接口可接受,也可以再次封装来对Object和Array有更好的支持|需要程序员自己封装,原生cookie接口不友好|原生接口可接受,也可以再次封装来对Object和Array有更好的支持|
