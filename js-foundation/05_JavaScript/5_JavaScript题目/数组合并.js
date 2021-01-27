

let arr1 = [1, 2, 3, 4, 5, 6];

let arr2 = [23, 43, 423, 156];

/* 生成新数组 */
let arr3 = arr1.concat(arr2);
console.log(arr3);

/* 在原数组上进行操作 */
arr1.push(...arr2);
console.log(arr1);