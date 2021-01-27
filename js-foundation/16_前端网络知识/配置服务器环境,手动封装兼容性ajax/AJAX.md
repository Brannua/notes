# AJAX

    > Asynchronous javascript and xml

- 用JavaScript以异步的形式操作Json格式的数据( 从前操作xml )
```
    // 对象
    var obj = {
        name: 'lg',
        age: 20
    }
    // Json格式
    var obj1 = {
        "name": "lg",
        "age": 20
    }
```
- Wampserver服务器
    - `D:\wamp\www\`( 本地服务器资源目录 )
    - `http://localhost/`( 访问服务器 )

- 前情提要( 订外卖 )
    - 1. 手机,电脑
    - 2. 美团外卖,饿了么,百度外卖
    - 3. 打开app 商家 商品 张亮麻辣烫
    - 4. 下单,备注信息( 不要麻辣不要烫 )
    - 5. 监听外卖信息
    - 6. 开门 验货 处理
- AJAX
    - 1. 浏览器
    - 2. ajax对象
    - 3. ajax.open(method, url, true)  ==> true是异步
    - 4. ajax.send();
    - 5. onreadystatechange 0~4
    - 6. status == 200 404 403 503