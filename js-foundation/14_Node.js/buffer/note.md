# Buffer知识点
-----------------------------------------------

## Buffer实例之构造方法

- buffer是nodejs提供的，用来操作字节类型数据

- buffer中的数据是十六进制数据

    - 十六进制:(0x开头 --> 0x61 === 16^0 * 1 + 16^1 * 6 === 十进制的97)

- alloc() from() 都是通过类名Buffer来调用的静态方法

    - 构造方法
        > Buffer.alloc(size)
        > Buffer.from(str/arr/buf)
        
    - 类方法
        - 统计特定编码下字符串对应的字节数
            > Buffer.byteLength(str, 编码)

        - 判断参数是否为Buffer实例
            > Buffer.isBuffer(obj)

        - 判断Buffer是否支持该编码
            > Buffer.isEncoding(编码字符集)

        - 写入Buffer实例
            > buf.write(string[, offset[, length]][, encoding])

        - 判断两个Buffer实例是否相等
            > buf1.equals(buf2)

        - 截取Buffer实例的一部分然后生成一个新的Buffer实例
            > buf.slice()

        - 返回字节位置
            > buf.indexOf()