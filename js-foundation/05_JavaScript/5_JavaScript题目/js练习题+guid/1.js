// 0x10000十六进制的10000
// toString(16)转换成16进制的字符串
// substring(1)从第二位开始截取子字符串
function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
console.log(guid());
// console.log((1 + Math.random()) * 0x10000)
// console.log(0x10000);
// console.log(((1 + Math.random()) * 0x10000) | 0);


// //第一个操作符数是字符串，对于非数值的操作符数，先使用Number()函数处理，结果返回NaN，NaN又会被当成0来处理，所以最终结果是0
// var num2 = 'string' & 1;
// console.log(num2);
// // 位运算(按位与&按位或|)
// var num6 = 23 & 5;
// console.log(num6);
// var num7 = 23 | 5;
// console.log(num7);