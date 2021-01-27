/**
 * 泛型
 */
// function take<T>(arr: T[], n: number): T[] {
//     if (n >= arr.length) {
//         return arr;
//     } else {
//         const newArr: T[] = [];
//         for (let i = 0; i < n; i++) {
//             newArr.push(arr[i]);
//         }
//         return newArr;
//     }
// }

// const result = take([3, 4, 5], 2);
// const newArr = take(["1", "2", "3", "4"], 2);
// newArr.forEach(item=>{
//     console.log(item);
// });
// --------------------------------------------------
/**
 * 类型别名和接口使用泛型
 */
// // type callback<T> = (item: T, index: number) => boolean;
// interface callback<T> {
//     (item: T, index: number): boolean;
// }
// /**
//  * 
//  * @param arr 泛型数组
//  * @param callback 回调函数,用来判断数组中的任何一项是否满足条件
//  */
// function filter<T>(arr: T[], callback: callback<T>): T[] {
//     const newArr: T[] = [];
//     arr.forEach((item, index) => {
//         if (callback(item, index)) {
//             newArr.push(item);
//         }
//     });
//     return newArr;
// }

// // 获取一个数组中的奇数
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = filter(arr, item => item % 2 !== 0);
// console.log(newArr);
// --------------------------------------------------
/**
 * 类中使用泛型, 参见ArrayHelper.ts
 */

// import {ArrayHelper} from "./ArrayHelper";
// const helper = new ArrayHelper([3, 4, 5, 6]);
// --------------------------------------------------
/* 
// 测试map()用法
// let numbers = [25, 36, 121, 49];
// console.log(numbers.map((item) => item * 10));
*/
/**
 * 泛型约束
 * 将每个对象的name属性的每个单词的首字母大写,然后将该对象返回
 */
// function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
//     obj.name = obj.name.split(" ").map(item=>item[0].toUpperCase()+item.substr(1)).join(" ")
//     return obj;
// }
// interface hasNameProperty {
//     name: string
// }
// const o = {
//     name: "brannua liu",
//     age: 20,
//     gender: "男"
// }
// const newO = nameToUpperCase(o);
// console.log(newO.name);//Brannua Liu

/**
 * 多泛型
 * 将两个长度一致的数组进行混合
 * [1, 3, 4]["a", "b", "c"] ==> [1, "a", 3, "b", 4, "c"]
 */
function mixinArray<T, K, W>(arr1: T[], arr2: K[]): (T | K)[] {
    if (arr1.length !== arr2.length) {
        throw new Error("两个数组长度不相等");
    } else {
        let result: (T | K)[] = [];
        for (let i = 0; i < arr1.length; i++) {
            result.push(arr1[i]);
            result.push(arr2[i]);
        }
        return result;
    }
}
let res = mixinArray([1, 3, 4], ["a", "b", "c"]);
console.log(res);