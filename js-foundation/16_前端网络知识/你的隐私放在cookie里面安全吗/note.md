# cookie

- 标记用户身份的http请求首部
    > 在请求头( request header )中
    - form: e-mail
    - user-agent: 浏览器
    - referer: 跳转链接
- 追踪机器的IP地址
    - IP标记的是机器而不是用户
    - 很多因特网服务商在用户登录的时候都会为他们随机分配一个动态的IP地址( IP地址**不稳定不唯一** )
    - 浏览器考虑到安全性因素,用户浏览的一些网络地址会转换成一个共享的防火墙的IP地址
- 用户登录
    - 保证信息的针对性更好,但是注册登录网站的过程较为繁琐
- 胖URL( url重置 )
    - 胖URL比较丑
    - 胖URL会对服务器产生额外的负载
    - 无法共享
    - 生命周期短( 网页一旦关闭就无法进行标记 )
- cookie
    > Cookie是由服务器端生成，发送给User-Agent（一般是浏览器），（服务器告诉浏览器设置一下cookie），浏览器会将Cookie以key/value保存到某个目录下的文本文件内，下次请求同一网站时就发送该Cookie给服务器（前提是浏览器设置为启用cookie）。

    > Cookie就是一个小型文件（浏览器对cookie的内存大小是有限制的-------用来记录一些信息）
- Cookie具有保质期( 一旦过期自动删除 )
    - 会话cookie( 临时cookie )
    - 永久cookie
- Cookie有个数和大小的限制，大小一般是4k
- 设置domain以后
    - 只有主域名自己和主域名的子域可以拿到Cookie值
```
document.cookie = "age=18;max-age=1000";
//Google Chrome在没有网络请求的时候不允许这样设置Cookie,因为浏览器认为没有设置Cookie的必要
```