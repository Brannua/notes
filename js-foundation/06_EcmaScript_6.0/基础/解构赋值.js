// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c);
// let [d, [e, [f]]] = [4, [5, [6]]];
// console.log(d, e, f);
// -------------------------------------
// let [a, b] = [2];
// console.log(a, b);
// -------------------------------------
// let [a, b] = [2, 3, 4];
// console.log(a, b);
// -------------------------------------
// let [x = 10] = [];
// console.log(x);// 10
// let [y = 10] = [20];
// console.log(y);// 20
// -------------------------------------
// let [x = 10] = [undefined]
// console.log(x);// 10
// let [y = 10] = [null];
// console.log(y);// null
// -------------------------------------
// function fn () {
//     console.log('函数fn执行');
//     return 2;
// }
// // 以下两种情况都不走模式匹配
// let [x = fn()] = [];
// console.log(x);
// let [y = fn()] = [undefined];
// console.log(y);
// -------------------------------------
// let [x = 1, y = x] = [];
// console.log(x, y);
// let [x = 1, y = x] = [2];
// console.log(x, y);
// let [x = 1, y = x] = [2, 4];
// console.log(x, y);
// -------------------------------------
// let [x = y, y = 1] = [];
// -------------------------------------
// let [x = y, y = 1] = [2];
// console.log(x, y);// 2 1
// -------------------------------------
// let {bar, foo} = {bar : 123, foo : 234};
// -------------------------------------
// let {bar} = {foo : 123, bar : 234};
// console.log(bar);// 234
// -------------------------------------
// let {bar} = {foo : 123};
// console.log(bar);// undefined
// let {bar} = {foo : 123, bar : undefined};
// console.log(bar);// undefined
// -------------------------------------
// let {bar} = {foo : 123, bar : null};
// console.log(bar);// null
// -------------------------------------
// let {foo : bar} = {foo : 123};
// console.log(bar);// 123
// console.log(foo);// foo is not defined
// -------------------------------------
// let obj = {
//     p: [
//         "hello",
//         {y:123}
//     ]
// }
// let {p, p: [x, {y:aa}]} = obj;
// console.log(p);
// console.log(x, aa);
// -------------------------------------
// 以下两种写法等价
// let {x, y = 3} = {x : 1};
// let {x:x, y:y = 3} = {x : 1};
// console.log(x);
// -------------------------------------
// let [a, b, c, d] = 'love';
// console.log(a, b, c, d);
// let {length:len} = "1235";
// console.log(len);
// -------------------------------------
// let {pow, ceil, floor} = Math;
// console.log(floor(12.3));
// -------------------------------------
// a, b, c分别是对应包装类原型上的方法
// let {toString:a} = 123;
// let {toString:b} = "123";
// let {toString:c} = false;
// console.log(a === Number.prototype.toString);
// console.log(b === String.prototype.toString);
// console.log(c === Boolean.prototype.toString);
// -------------------------------------
// let arr = [
//     [1, 2],
//     [3, 4]
// ].map(function ([a, b]) {
//     return a + b;
// })
// -------------------------------------
// let a = 1, b = 2;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);
// -------------------------------------
function methods() {
    return {
        add: function () {},
        sum: function () {}
    }
}
let {add, sum} = methods();
console.log(add, sum);