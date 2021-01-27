# 应用实例

- 该文件夹是Node.js应用于项目目录结构创建的小工具
    - 包的创建
        - npm init -y
        - 创建入口文件 
            >index.js
        - 创建初始化模块
            >init.js
        - 创建配置文件
            >config.json 
            - 首先需要根路径"rootName"的名称
            - 其次需要"data"表示要创哪些文件或者目录,其中的每一项都是一个对象,表示每一个具体的文件或者目录的描述
        - init文件中引入config.json
        - index文件中引入init文件
        - 根目录创建两个页面,index.html && 404.html
            - fs.writeFile()如果文件不存在就会创建一个文件
            - 文件存在的话就会覆盖里面的内容进行写入操作
        - 当逻辑写通之后,exports.init = init;暴露接口,在index.js中加载init模块,接受返回值对象并调用接口函数
    - 包的设置
        - 拷贝包,将其放入Node.js安装环境的node_modules目录下
        - Node.js安装环境的根目录下配置一个可用于执行的.cmd文件,名字自定义,我用的init
            >init.cmd
        - 编辑该.cmd文件,使其指向node_modules下的包
            >initProjectTool
        - 编辑包的index.js文件,通过 `let param = process.argv[2]` 获取命令参数
            >-v: 打印版本信息

            >-i: obj.init()

            >-h: 打印帮助信息
        - 编辑包的init.js文件,除了读文件操作以外,所有的涉及创建目录和文件,都用'./'即当前命令窗口所在位置为创建根目录的地址

    - 第一个自己创建的基于Node.js的包到此创建成功
        - 不足: 如果上传npmjs website,用户下载该包还需要手动配置init.cmd文件