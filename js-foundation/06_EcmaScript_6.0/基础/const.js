// const MAX = 9999;
// console.log(MAX);
// MAX++;//报错
// -------------------
/* 块级作用域 */
/* 同一作用域不允许重复声明 */
/* 没有变量提升 */
/* 暂时性死区 */
let MAX = 9999;
{
    console.log(MAX);
    let MAX = 8888;
    console.log(MAX);
}
console.log(MAX);
// -------------------
// const obj = {};
// obj.a = 123;
// console.log(obj);