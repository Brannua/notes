# 笔记

- 模拟移动端的 meta
    ```
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    ```
- name为视口( viewport )
- 宽度为设备宽度
    ```
    width=device-width
    ```
- 不允许用户进行缩放
    ```
    minimum-scale=1.0,maximum-scale=1.0,user-scalable=no
    ```
----------------------------------------------------------------------

## 媒体查询

> **媒体查询是向不同设备提供不同样式的一种方式,它为每种类型的用户提供了最佳的体验**

> CSS2: media type

- media type( 媒体类型 )是CSS2中的一个非常有用的属性,通过media type我们可以对不同的设备指定特定的样式,从而实现更丰富的界面

> CSS3: media query

- media query是CSS3对media type的增强,事实上我们可以将media query看成是media type+css属性( 媒体特性Media features )判断

- 如何使用媒体查询？？？
    - link标签
        ```
        <link rel="stylesheet" media="screen and (max-width: 800px)" href="index.css">
        ```
        |媒体类型(media type)|解释|
        |:--:|:--:|
        |all|所有设备|
        |screen|彩色电脑屏幕|
        |print|文档打印或者打印预览模式|
        |...|...|

        |媒体特性(media features)|解释|
        |:--:|:--:|
        |width|渲染区宽度|
        |device-width|设备宽度|
        |max-width|最大宽度|
        |min-width|最小宽度|
        |...|...|
    - @import
    - **CSS3新增的@media**
----------------------------------------------------------------------

## 逻辑操作符

- 合并多个媒体属性或合并媒体属性与媒体类型
    - 一个基本的媒体查询,即一个媒体属性与默认指定的screen媒体类型
        ```
        @media screen and (min-width: 600px) and (max-width: 100px)
        ```

- 指定备用功能
    - 没有or关键词可用于指定备用的媒体功能。相反,可以将备用功能以逗号分割列表的形式列出
        ```
        // 这会将样式应用到宽度超过769像素的屏幕或使用至少6英寸宽的纸张的打印设备
        @media screen and (min-width: 769px), print and (min-width: 6in)
        ```

- 指定否定条件
    - 要指定否定条件,可以在媒体声明中添加关键字not,不能再单个条件前使用not,该关键字必须位于声明的开头,而且它会否定整个声明。
        ```
        // 应用于除单色屏幕外的所有设备
        @media not screen and (monochrome)
        ```

- 向早期浏览器隐藏媒体查询( 仅作了解 )
    - 媒体查询规范还提供了关键字only,它用于向早期浏览器隐藏媒体查询。类似于not,该关键字必须位于声明的开头
    - 早期浏览器应该将以下语句media="screen and (min-width:401px) and (max-width:600px)"解释为media="screen",换句话说,它应该将样式规则应用于所有屏幕设备,即使它不知道媒体查询的含义
    - 无法识别媒体查询的浏览器要求获得逗号分割的媒体类型列表,规范要求,他们应该在第一个不是连字符的非数字字母字符之前截断每个值
        ```
        // 早期浏览器将下解释为media="only",因为没有only这样的媒体设备,所以样式表被忽略
        media="only screen and (min-width:401px) and (max-width:600px)"
        ```

- 易混淆的宽度
    - device-width & device-height ( 设备的宽高 )
    - width & height ( 浏览器的宽高 )
        - 使用documentElement.clientWidth & documentElement.clientHeight ( 即viewport的值 )