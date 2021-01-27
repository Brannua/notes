const path = require('path');

// 截取路径中的文件名
// let res1 = path.basename('/foo/bar/baz/asdf/quux.html');
// let res2 = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// console.log(res1);
// console.log(res2);
// ------------------------------------------------------------------------------------------------------------------------

// 返回path的目录名(尾部的目录分隔符将被忽略)
// let res3 = path.dirname('/foo/bar/baz/asdf/quux');
// console.log(res3);
// ------------------------------------------------------------------------------------------------------------------------

// path.extname(path)返回 path 的扩展名
// let res4 = path.extname('index.html');
// let res5 = path.extname('index.coffee.md');
// let res6 = path.extname('index.');
// let res7 = path.extname('index');
// let res8= path.extname('.index');
// console.log(res4);
// console.log(res5);
// console.log(res6);
// console.log(res7);
// console.log(res8);
// ------------------------------------------------------------------------------------------------------------------------

// path.parse() 方法返回一个对象，其属性表示 path 的重要元素
// let pathObj = path.parse('/home/user/dir/file.txt');
// console.log(pathObj);
// console.log(pathObj.base);
    // { 
    //   root: '/',
    //   dir: '/home/user/dir',
    //   base: 'file.txt',
    //   ext: '.txt',
    //   name: 'file' 
    // }
// ------------------------------------------------------------------------------------------------------------------------

// path.format() 方法从对象返回路径字符串。 与 path.parse() 相反
// let obj = { 
//     root: '/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file' 
//   };
// let str = path.format(obj);
// console.log(str);//  /home/user/dir\file.txt
// ------------------------------------------------------------------------------------------------------------------------

// path.isAbsolute() 方法检测 path 是否为绝对路径
// // windows
// let boo1 = path.isAbsolute('//server');    // true
// let boo2 = path.isAbsolute('\\\\server');  // true
// let boo3 = path.isAbsolute('C:/foo/..');   // true
// let boo4 = path.isAbsolute('C:\\foo\\..'); // true
// // linux
// let boo5 = path.isAbsolute('/foo/bar'); // true
// let boo6 = path.isAbsolute('/baz/..');  // true
// console.log(boo1, boo2, boo3, boo4, boo5, boo6);
// ------------------------------------------------------------------------------------------------------------------------

// path.normalize() 方法规范化给定的 path，解析 '..' 和 '.' 片段
// linux
// let formatPath = path.normalize('/foo/bar//baz/asdf/quux/..');
// console.log(formatPath);
// windows
// let formatPath2 = path.normalize('C:\\temp\\\\foo\\bar\\..\\');
// console.log(formatPath2);
// ------------------------------------------------------------------------------------------------------------------------

// path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径
// let str = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');;
// console.log(str);
// // 当前文件的全路径
// let nowFilePath = path.join(__dirname, '01.js');
// console.log(nowFilePath);
// ------------------------------------------------------------------------------------------------------------------------

// path.relative() 方法根据当前工作目录返回 from 到 to 的相对路径
// // linux
// let relativePath = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// console.log(relativePath);
// // windows
// let relativePath2 = path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// console.log(relativePath2);
// ------------------------------------------------------------------------------------------------------------------------

// path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
// 如果在处理完所有给定的 path 片段之后还未生成绝对路径，则再加上当前工作目录
let absPath = path.resolve('/foo/bar', './baz');
let absPath2 = path.resolve('/foo/bar', '/tmp/file/');
let absPath3 = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
let absPath4 = path.resolve();
console.log(absPath);
console.log(absPath2);
console.log(absPath3);
console.log(absPath4);



//path.delimiter提供平台特定的路径定界符 --> linux(:)/windows(;)
// console.log(process.env.PATH);
// let PathArr = process.env.PATH.split(path.delimiter);
// console.log(PathArr);
// ------------------------------------------------------------------------------------------------------------------------

// path.sep提供平台特定的路径片段分隔符 --> Windows上是\, POSIX上是/
// 在 Windows 上，正斜杠（/）和反斜杠（\）都被接受为路径片段分隔符。 但是， path 方法只添加反斜杠（\）
// let arr = 'foo\\bar\\baz'.split(path.sep);
// console.log(arr);