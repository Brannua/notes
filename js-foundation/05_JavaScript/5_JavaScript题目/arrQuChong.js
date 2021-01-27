/* 
    数组去重
*/
var arr = [1,2,3,4,1,2,3,5,6,6,1];
// 方法一(ES5) -- arr.indexOf()
// var newArr = [];
// for (var i = 0; i < arr.length; i ++) {
//     if (newArr.indexOf(arr[i]) == -1) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);


// 方法二(ES5) -- 利用对象key的唯一性 && Object.keys(obj)
// var obj = {};
// for (var i = 0; i < arr.length; i ++) {
//     obj[arr[i]] = 'true';
// }
// console.log(Object.keys(obj));


// 方法三(ES6) -- 利用set的唯一性 && Array.from(set)
// var set = new Set();
// for (var i = 0; i < arr.length; i ++) {
//     set.add(arr[i]);
// }
// console.log(Array.from(set));