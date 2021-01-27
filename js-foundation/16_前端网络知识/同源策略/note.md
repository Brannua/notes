# 同源策略知识

> 浏览器有一个很重要的概念——同源策略(Same-Origin Policy)。所谓同源是指**协议，域名，端口**相同。

> 不同源的客户端脚本(javascript、ActionScript)在没明确授权的情况下，不能读写对方的资源。

> 简单的来说，浏览器不允许包含在腾讯页面的脚本访问阿里巴巴页面的数据资源，会受到同源策略的限制

> demo:本地访问百度资源( 域名不相同 ==> 拿不到数据 )

```
https://www.baidu.com:443/
http://www.w3school.com.cn:80/
```
- 协议:
    - http
    - https( SSL )
- 域名:
    - www.baidu.com
    - www.w3school.com.cn
- 端口:
    - http协议默认端口80
    - https协议默认端口443

- DNS解析
    - DNS客户端把当前的www.xxx.com发送给DNS服务器
    - DNS服务器倒着解析出一条IP地址并将其返回给浏览器
    - 浏览器拿到这个IP地址之后向浏览器发送一个请求
        - 写www是尊重用户的习惯
        - 不写www的裸域名只能绑定DNS的a记录而不能绑定c记录( 域名无别名 )
        - 裸域名的cookie作用范围大

- AJAX受同源策略的限制

- 请求方法GET和POST的区别
    - GET使用url或cookie传递参数,而POST将数据放在body中
    - GET的url有长度上的限制所以能传递的信息量很小,POST可以传递很多数据( 但是为了服务器的安全也会有长度限制 )
    - POST比GET安全
        - 注意这个安全也是相对小白而言的,因为get的参数是在url中,post的数据打开控制台就可以看到

- 浏览器缓存机制( http )
    > 304上次缓存的资源没有改变
    - 请求头
        - if-None-Match <==> 匹配etag
        - if-Modified-Since <==> 将先前服务器端发过来的最后修改时间戳发送回去
    - 响应头
        - etag标记图片资源
        - last-Modified服务器最后修改时间和etag配合使用
- 网站如何统计用户从何点击而来
    - referer: 如果从浏览器地址栏里面直接输入地址,请求头没有referer