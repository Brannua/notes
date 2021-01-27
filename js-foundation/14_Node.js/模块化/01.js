// 可直接执行js代码
console.log("hello world");

// 以下两种方式效果相同
global.console.log(123);
console.log(123);


// 机器的处理器
console.log(process.arch);


// 通过argv可以从第三项开始获取到命令执行时所传递的参数
console.log(process.argv);
console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(process.argv[4]);


// 当前文件夹的路径
console.log(__dirname);
// 当前文件的路径
console.log(__filename);