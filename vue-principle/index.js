/**
 * promise练习题
 * https://www.cnblogs.com/rogerwu/p/10757069.html
 */

/**
 * 练习题
 */
// console.log(1)

// setTimeout(() => {
//   console.log(4)
// }, 0)

// new Promise((resolve) => {
//   console.log(7);
//   resolve()
//   console.log(2)
// }).then(() => {
//   console.log(3)
// })

// console.log(5)


/**
 * 练习题
 */
// Promise.resolve().then(()=>{
//   console.log('1')
//   setTimeout(()=>{
//     console.log('2')
//   },0)
// })

// setTimeout(()=>{
//   console.log('3')
//   Promise.resolve().then(()=>{
//     console.log('4')
//   })
// }, 3000)


/**
 * 练习题
 */
// Promise.resolve().then(()=>{
//   console.log('1')
//   setTimeout(()=>{
//     console.log('2')
//   },0)
// })

// setTimeout(()=>{
//   console.log('3')
//   Promise.resolve().then(()=>{
//     console.log('4')
//   })
// },0)


/**
 * 练习题
 */
// setTimeout(function () {
//   console.log(4)
// }, 0);

// new Promise(function (resolve) {
//   console.log(1)
//   for (var i = 0; i < 10000; i++) {
//     // i == 9999 && resolve()
//   }
//   console.log(2)
// }).then(function () {
//   console.log(5)
// });
// console.log(3);