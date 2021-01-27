/* 
    寻找一个单身狗
*/

var arr = [1, 2, 3, 4, 5, 1, 2, 3, 5];

// 方法一(ES5)
// var obj = {};
// var danShenGou;
// for (var i = 0; i < arr.length; i ++) {
//     if (obj[arr[i]]) {
//         delete obj[arr[i]];
//     } else {
//         obj[arr[i]] = 'true';
//     }
// }
// danShenGou = Object.keys(obj)[0];

// 方法二(ES6)
// var set = new Set();
// for (var i = 0; i < arr.length; i ++) {
//     if (set.has(arr[i])) {
//         set.delete(arr[i]);
//     } else {
//         set.add(arr[i]);
//     }
// }
// console.log(...set);

// 方法三(使用异或)
// 异或满足交换律
var danShenGou = 0;
for (var i = 0; i < arr.length; i++) {
    danShenGou ^= arr[i];
}
console.log(danShenGou);