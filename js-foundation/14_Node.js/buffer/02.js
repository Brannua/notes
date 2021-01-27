/* 
    Buffer类方法与实例方法
*/

// Buffer.byteLength(str, 编码)
// 统计特定编码下字符串对应的字节数
// const str = '\u00bd + \u00bc = \u00be';
// let ret1 = Buffer.byteLength(str, 'utf8');
// console.log(str, ret1);
// let ret2 = Buffer.byteLength(str, 'ascii');
// console.log(str, ret2);


// Buffer.isBuffer(obj);
// 用于判断参数是否为Buffer实例
// let buf = Buffer.alloc(5);
// let ret3 = Buffer.isBuffer(buf);
// console.log(ret3);//true



// 判断Buffer是否支持该编码
// console.log(Buffer.isEncoding('utf8'));



/* 
    参数一: 要写入buf的字符串
    参数二: 开始写的位置
    参数三: 写入的长度
    参数四: 编码形式
*/
// buf.write(string[, offset[, length]][, encoding])
// let buf = Buffer.alloc(5);
// buf.write('abc', 2, 2, 'utf8');
// console.log(buf);//<Buffer 00 00 61 62 00>



// buf1.equals(buf2) --> 判断两个Buffer实例是否相等
// let buf1 = Buffer.from('abc');
// let buf2 = Buffer.from('abc');
// let res = buf1.equals(buf2);
// console.log(res);



// buf.indexOf();
// const buf = Buffer.from('this is a buffer');
// var res = buf.indexOf('buffer');
// console.log(res);//10



// buf.slice()
// 截取Buffer实例的一部分然后生成一个新的Buffer实例
// let buf = Buffer.from('abcde');
// console.log(buf);
// let res1 = buf.slice(2);
// console.log(res1);
// let res2 = buf.slice(2, 3);
// console.log(res2);