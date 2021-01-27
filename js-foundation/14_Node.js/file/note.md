# Node.js文件操作
---------------------------------------------

## fs.Stats 类

- 查看文件的状态信息
    - fs.stat(path[, options], callback)
    - fs.statSync(path[, options])

- 文件的存在性检查
    - fs.access(path[, mode], callback)
    - fs.accessSync(path[, mode])
    - fs.stat(path[, options], callback)

    > 回调函数是异步的方式
    > 同步版本阻塞式的性能低

- 文件操作
    - fs.open(path, flags[, mode], callback)
    - fs.openSync(path, flags[, mode])
        - path 文件的路径
        - flags 文件的打开方式
        - mode 用于linux平台,控制文件的"读,写,可执行",参数可选
        - callback(err, fd) 回调函数
        - 同步方法的返回值就是文件描述符fd
            - fd(file discriptor): 文件描述符
            - fd就是文件的引用,可以进行文件读写操作
            - fd默认从3开始,执行多次fd累加,类似于timer的累加    
            >flags

            >'r' - 打开文件用于读取。如果文件不存在，则出现异常。

            >'r+' - 打开文件用于读取和写入。如果文件不存在，则出现异常。

            >'rs+' - 以同步模式打开文件用于读取和写入。指示操作系统绕过本地的文件系统缓存。

            >'w' - 打开文件用于写入。如果文件不存在则创建文件，如果文件已存在则截断文件。

            >'wx' - 与 'w' 相似，但如果路径已存在则失败。

            >'w+' - 打开文件用于读取和写入。如果文件不存在则创建文件，如果文件已存在则截断文件。

            >'a' - 打开文件用于追加。如果文件不存在，则创建该文件。

            >'ax' - 与 'a' 相似，但如果路径已存在则失败。

            >'a+' - 打开文件用于读取和追加。如果文件不存在，则创建该文件。

            >'ax+' - 与 'a+' 相似，但如果路径已存在则失败。

            >'as' - 以同步模式打开文件用于追加。如果文件不存在，则创建该文件。

            >'as+' - 以同步模式打开文件用于读取和追加。如果文件不存在，则创建该文件。

    - fs.read(fd, buffer, offset, length, position, callback)
        - fd 文件描述符
        - buffer 读取的数据放到buffer中
        - offset 读取的数据从buffer的第几个位置开始写
        - length 读取文件中数据的字节数量
        - position 从文件的什么位置开始读,置null就是从文件开头读
        - callback(err, bytesRead, buffer) 回调函数

    - fs.write(fd, buffer[, offset[, length[, position]]], callback)
        - fs.writeSync(fd, buffer[, offset[, length[, position]]])
    - fs.write(fd, string[, position[, encoding]], callback)
        - fs.writeSync(fd, string[, position[, encoding]])
            > written指的是字节数量,而不是字符数量

            > Node.js一些原生方法同名,类似于方法重载,比如这个API就有同名方法,根据参数的不同来区别调用,但API的内部实现是一个做了兼容不同参数的方法,也和jquery中的API性质类似

            > Node.js开发者自定义方法不支持重载
    
    - fs.readFile(path[, options], callback)
        - path: 表示文件名称或者文件描述符
        - options: 
            - 字符串形式: 表示编码字符集
            - 对象形式: encoding, flag
        - callback(err, data): 回调函数
            - data: 实际读取的数据
                - 若指定了编码,data是字符串
                - 不指定编码,data是buffer
    - fs.readFileSync(path[, options])

    - fs.writeFile(file, data[, options], callback)
    - fs.writeFileSync(file, data[, options])

    - fs.appendFile(path, data[, options], callback)
    - fs.appendFileSync(path, data[, options])
        - 文件内容的追加还可以利用open方法的不同打开方式参数来实现
        - 多次执行文件的追加会多次追加内容

    - fs.unlink(path, callback)
    - fs.unlinkSync(path)
        - 可以删除快捷方式,但是无法删除快捷方式指向的文件
    
- 目录操作
    - fs.mkdir(path[, options], callback)
    - fs.mkdirSync(path[, options])

    - fs.readdir(path[, options], callback)
    - fs.readdirSync(path[, options])

    - fs.rmdir(path, callback)
    - fs.rmdirSync(path)

- 文件监控操作
    - fs.watch(filename[, options][, listener])
    - fs.watchFile(filename[, options], listener)
        - filename: 监控的文件名称
        - options: (persitent=true, interval=5007:每隔5007毫秒检测一次文件的状态)
        - listener: 事件函数
        - curr: 当前文件的状态
        - prev: 之前文件的状态
    - 取消对某特定文件的状态监听
    - fs.unwatchFile(filename[, listener])
        - listener为可选参数,若不填则默认取消有关特定文件的所有监听函数
    - fs.watch(filename[, options][, listener])