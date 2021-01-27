/* *
 * 判断一个数是否为奇数
 */
// function isOdd(n: number): boolean {
//     if (n % 2 === 0) {
//         return false;
//     }
//     return true;
// }
/* *
 * 对number类型的数组进行类型约束
 * 有以下两种方法
 */
let nums1 = [1, 2, 3];
let nums2 = [1, 2, 3];
/* *
 * 对object类型的数组进行类型约束
 */
function printValues(obj) {
    const vals = Object.values(obj);
    vals.forEach(v => console.log(v));
}
printValues({ name: "xaioliu", age: 20 });
