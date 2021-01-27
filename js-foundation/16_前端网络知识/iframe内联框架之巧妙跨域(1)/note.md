# 笔记

- 因为iframe标签会导致页面阻塞
    - 所以尽量少引入frame标签
    - 或者采用动态创建iframe标签的方式
- 只用主窗口和子窗口是同源的
    - 主窗口才能从自窗口取值

- 如何获取iframe内的window
    > 获取子窗口

    - document.getElementsByTagName('iframe')[0].contentWindow;
    - document.getElementsById('id').contentWindow;
    - 简易写法
        - window.iframes['iframe的name'];
    - IE专用
        - document.iframes[name].contentWindow;
        - document.iframes[i].contentWindow;
    > 获取父窗口的window
    - window.parent
    > 获取顶级窗口对象
    - window.top

- 判断iframe加载完成
    - 非ie下使用onload
        - iframe( dom元素 ).onload = function(){}
    - ie下使用onreadystatechange或者设计定时器
    ```
    iframe.onreadystatechange = function(){
        if (iframe.readyState == 'complete'||iframe.readyState == 'loaded') {
            alert('Local iframe is now loaded.');
        }
    }
        ```
- iframe借助哈希值实现跨域
    - document.domai: 解决跨域限制的最好方法
    - 子页面向父页面传值可以直接用iframe的src中的哈希值
        - 同源不同源都可以
    - 缺点
        > 参数裸露在url后面 ( 不安全 )

        > 参数长度受限制

    - 父页面取子页面的值
        - 父页面监听子页面是否加载完成`oIframe.onload`
        - 子页面一旦加载完成,因为父页面无法利用oIframe.contentWindow来获取和自己不同源的页面的window
        - 所以父页面立即替换oIframe的src为和父页面同源的页面来获取子页面利用window.name属性刻在子页面自己窗体上的值
        - 缺点
            > 必须借助iframe框架
    - H5 PostMessage