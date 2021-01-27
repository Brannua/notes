

// let name: string;
// name = "123";

/* *
 * 两个number类型的变量相加,返回值为number类型 
 */
// function add(a: number, b: number): number {
//     return a + b;
// }
// let num:number = add(3, 4);
// let name = "brannua";
// let phone = "13461633444";

/* *
 * 类型别名
 */
// type Gender = "男" | "女";
// type User = {
//     name: string
//     age: number
//     gender: Gender
// }
// let u: User;
// u = {
//     name: "brannua",
//     age: 20,
//     gender: "男"
// }
// function getUsers(g:Gender): User[] {
//     return [];
// }

/* *
 * 函数的相关约束
 */
// 函数重载( 使得调用函数的时候参数类型和返回值类型仍有正确的类型检查 )
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
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
function sum(a: number, b: number, c: number = 0): number {
    return a + b + c;
}
sum(1, 2);
sum(1, 2, 3);