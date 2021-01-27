// 模块导入
var Odemo = require("./exports.js");
// 模块接口调用
console.log(Odemo.say);
Odemo.showInfo();




// 构造函数模块导入
// var Calculate = require("./module_function.js");
// 实例化对象并进行初始化及方法调用
// var obj = new Calculate(1, 2);
// var res1 = obj.add(); 
// var res2 = obj.abstract(); 
// var res3 = obj.divide(); 
// var res4 = obj.multiply(); 
// 打印结果
// console.log(res1, res2, res3, res4);
// console.log(obj.say());


// 导入对象模块并打印
// var obj = require('./obj');
// console.log(obj);



// 导入构造函数构造出的实例化对象
// var obj = require("./Function_obj");
// console.log(obj);
// console.log(obj.say());




// module.exports和exports都指向Object的实例化对象{}
// console.log(module.exports);
// console.log(exports);



// require("./glob");
// console.log(global.info);
// console.log(global.showInfo());
