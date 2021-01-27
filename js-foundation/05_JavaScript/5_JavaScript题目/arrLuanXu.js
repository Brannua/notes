/* 
    数组乱序
*/
var arr = [1, 2, 3, 4, 5, 6];

// 方法一
// var newArr = [];
// while (arr.length) {
//     var index = Math.floor(Math.random() * arr.length);
//     newArr.push(arr[index]);
//     arr.splice(index, 1);
// }
// console.log(newArr);

// 方法二(better)
// arr.sort(function (a, b) {
//     return Math.random() > 0.5 ? 1 : -1;
// });
// console.log(arr);