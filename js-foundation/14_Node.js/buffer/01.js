/* 
    Buffer实例之构造方法
*/

// buffer中的数据是十六进制数据
// 十六进制:(0x开头 --> 0x61 === 16^0*1 + 16^1*6 === 十进制的97)

//开辟5个字节的空间
let buf1 = new Buffer.alloc(5);
console.log(buf1);


// string
                      //(asc码)
//<Buffer 61 62 63> -> 97 98 99 -> a b c
let buf2 = new Buffer.from('abc');
console.log(buf2);


// array
let buf3 = new Buffer.from([1,2,3]);
console.log(buf3);


// copy
let buf4 = new Buffer.from(buf3);
console.log(buf4);


// alloc() from() 都是通过类名Buffer来调用的静态方法