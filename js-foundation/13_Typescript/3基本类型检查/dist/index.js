// let name: string;
// name = "123";
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("a和b的类型必须一致");
}
const res1 = combine(1, 2);
const res2 = combine("a", "b");
// 可选参数
// function sum(a: number, b: number, c?: number): number {
//     if (c) {
//         return a + b + c;
//     }
//     return a + b;
// }
// sum(1, 2);
// sum(1, 2, 3);
// 默认参数( 默认参数一定是可选参数 )
function sum(a, b, c = 0) {
    return a + b + c;
}
sum(1, 2);
sum(1, 2, 3);
