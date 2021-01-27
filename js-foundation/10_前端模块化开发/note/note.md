# 笔记

- 模块化
    - 一个文件对应一个模块对应一个功能
    - 内部定义的变量是属于这个模块的,不会污染全局变量

## CommonJs
- 核心思想
    - 通过require方法来同步加载所要依赖的其他模块
    - 然后通过exports或者module.exports来导出要暴露的接口

- 浏览器不兼容CommonJs
    - 原因是浏览器缺少module,exports,require,global四个环境变量
    - 如要使用需要工具转换

- CommonJs采用同步加载不同模块文件,适用于服务器端
    - 因为模块文件都存放在服务器的各个硬盘上,读取加载时间快
    - 而浏览器端的各种资源都是发送请求从服务端拿的，发送请求的时间远远大于服务器端读取的速度

- NodeJs基于CommonJs, webpack对CommonJs原生支持

## AMD
- 核心思想
    - 通过define来定义一个模块
    - 然后使用require来加载一个模块
    ```
    // math.js
    define(function(){
        // ...
    });

    // main.js
    require(['jquery', 'math'], function($, math){
        // ...
    })
    ```
- 异步加载模块
- 允许指定回调函数( 模块异步加载完成后即可调用回调函数 )
- AMD得意的产出就是**require.js**

## CMD
- 核心思想
    - 通过define来定义一个模块
    - 然后使用require来加载一个模块
    
- 异步加载
- AMD依赖前置,提前加载依赖
- CMD就近加载,按需加载
- 产物sea.Js

## ES6
- 自带模块化
- 使用import关键字引入模块
- 使用export关键字导出模块
- import(不受浏览器支持) ==> bable编译 ==> require(浏览器支持)