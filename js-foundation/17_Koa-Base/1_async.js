

/* async 返回Promise对象 */

// async function timeout() {
//     return 1;
// }
// timeout().then(res => {
//     console.log(res);
// })
// console.log(2);
// ---------------------------------------------------
/* await只能在async函数内部使用 */
// function demo() {
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             console.log(1);
//             resolve();
//         }, 2000);
//     })
// }
// async function fn() {
//     await demo();
//     console.log(2);
// }
// fn();