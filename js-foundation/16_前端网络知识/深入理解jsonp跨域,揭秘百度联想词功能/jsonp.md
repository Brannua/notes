# jsonp

- 解决跨域的几种方法
    - Flash( 不做讨论 )
    - 服务器代理中转
    - jsonp
    - document.domain( 针对基础域名相同的情况 )
        - bj.58.com ==> document.domain='58.com'
        - tj.58.com ==> document.domain='58.com'
- jsonp(动态创建script标签异步加载js脚本)
    > src不受同源策略的限制,不受跨域的影响,可以借助这一点进行**跨域获取( GET )数据**
    - 前端
    ```
    var oScript = document.createElement('script');
    oScript.src = 'xxx.xxx?cb=aa';//参数为前端自定义的回调函数的名称
    document.body.appendChild(oScript);
    //定义动态创建的script标签所加载的资源的回调函数
    function aa(data){
        console.log(data);
    }
    ```
    - 后端( 拿到了前端传过来的回调函数名称cb=aa直接按照调用的写法返回数据 )
    ```
    aa({"name":"xiaoliu","age":20})
    ```