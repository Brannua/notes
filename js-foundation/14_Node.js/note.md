# day 01

- Node.js程序运行方式之一: REPL(read-eval-print-loop)

- 在命令行窗口中, _表示当前计算的表达式的结果

- 两次ctrl+c可以退出REPL模式,或者执行.exit命令

- nodejs端不可以进行DOM BOM操作

- nodejs端全局对象很多,比如global, process等

--------------------------------------------------------------

- 模块化解决了命名冲突和文件依赖的问题

- 初识模块化操作:了解模块的导出导入，接口的暴露与调用

- 一般导出单个成员用exports,导出实例化对象或构造函数使用module.exports

- 可以使用global在nodejs的全局公开一些成员和属性和方法,模块的引入无返回值

- module.exports和exports都指向Object的实例化对象{}

- 真正导出模块的时候内部使用的是*module.exports*,exports是module.exports所指向的空对象的一个引用

- 被加载的模块中的代码会被执行,所以其中的输出语句console.log()也会被执行

- 每次被引入的模块都会被缓存,多次修改模块并写入多次模块引入语句类似于热更新，只会加载修改部分(缓存机制->根据路径)


------------------------------------------------------------
- 可以作为模块的文件格式(按优先级从高到低排序)
    + 无后缀
    + .js
    + .json
    + .node
    + 文件夹(其中放入index.js)

- 注意.node为后缀名的并不是文本文件,而是*一个二进制文件*

- nodejs模块化分为*开发者自定义模块*和*nodejs封装好的核心模块(用于操作底层API)*
    + fs
    + http
    + path
    + querystring
    + url
    ...

    *核心模块的优先级高于自定义模块*

    - nodejs端的模块导入导出属于磁盘上的文件读取
    - 浏览器端的文件引入涉及到网络通信
    *注意这两者的区别*

--------------------------------------------------
    
- 包的概念
    - npm init创建package.json
    - npm init -y创建默认的package.json

    - "scripts"中写的都是自定义的命令 例如执行命令 node start,就相当于执行package.json中"test"所指代的代码

    - 执行index.js的三种方式  1)在包目录下执行命令 node . 就是执行的package.json中"main"所指向的文件，默认为index.js  2)在scripts自定义命令中写入node index.js的命令再试用自定义命令  3)外部文件引入包，并利用node命令执行外部文件

    - package.json属性注意事项
        + name
            - 长度必须小于等于214个字符
            - 不能以.或者_开头
            - 不能包含大写字母
            - 不能含有非URL安全的字符
        + version
            - version和name字段是最重要的必须字段，如果你的包中没有指定这两个字段，将无法通过npm被安装
            - 包内容的更改和包版本的更改是同步的
            - version的格式必须正确(符合http://docs.npmjs.com/misc/semver规则)
            - 语义化版本
                - 一个标准的版本号必须是X.Y.Z的形式:X是主版本Y是副版本Z是补丁版本
                    - X代表发生了不兼容的API改变
                    - Y代表向后兼容的功能性变化
                    - Z代表向后兼容bug fixes
                - ~与^的区别
                    - ~X.Y.Z匹配大于X.Y.Z的z的最新版
                        - ~1.2.3等价于>=1.2.3<1.3.0
                        - ~1.2等价于>=1.2.0<1.3.0
                        - ~1等价于>=1.0.0<2.0.0
                    - ^X.Y.Z匹配大于X.Y.Z的y.z的最新版
                        - ^1.2.3等价于>=1.2.3<2.0.0
                        - ^0.2.3等价于>=0.2.3<0.3.0
                        - ^0.0.3等价于>=0.0.3<0.0.4
    - npm 常用命令
        - npm -v 
        - npm install 包名 
        - npm uninstall 包名
        - npm install 包名 --save(安装依赖)
        - npm install 包名 --save-dev(安装开发依赖)
        - npm update 包名 
        - npm install(安装开发和生产环境下所有依赖)
        - npm install --production(只安装生产环境的包)
        ......
    - 全局安装(-g)与本地安装

    - 模块的加载
        + 核心模块的加载(优先级最高)-->require的参数是固定参数
        + 文件模块-->require的参数是路径
        + 文件夹的加载(内部文件默认index.js)-->require的参数是路径
        + 从node_modules目录下加载-->require的参数是固定参数
        + 从缓存中加载

-------------------------------------------------------------

- npm的问题
    + 资源都在国外有时候会被墙,导致无法下载或者很慢，三种解决方法如下
        + npm config set registry https://registry.npm.taobao.org
        + cnpm
            + 官网 http://npm.taobao.org
            + npm install -g cnpm --registry=https//registry.npm.taobao.org
        + nrm
            + 项目地址 https://www.npmjs.com/package/nrm
                + nrm
                + nrm ls
                + nrm use "name"

-----------------------------------------------------------------------
## Node.js的web开发相关内容总结
- Node.js不需要依赖第三方应用软件,例如Apache等等,可以基于api自己实现
- 实现静态资源服务器
- 动态网站
- 路由处理
- get和post参数传递和处理
- 模板引擎