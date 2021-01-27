# 在TS中使用模块化

> 前端领域中的模块化标准: **ES6, commonjs**, amd, umd, system, esnext

- TS中, 导入和导出模块, 统一使用ES6的模块化标准
    - 导出
    ```
    export const name = "Brannua";
    export function sum( a:number, b:number ){
        return a + b;
    }
    ```
    - 导入
        > 注意: import导入模块的语句书写ts文件后缀名".ts"是不被允许的,因为模块化导入语句参与编译,编译结果找不到扩展名为ts的文件
    ```
    import { name, sum } from "./myModule"
    console.log( name );
    sum( 1, 2 );
    ```
    - 如果使用默认导出,则由于默认导出的是一个包含成员的无名对象,在导入中ts无法推导出成员名,需要自定义导入模块( 导入对象 )的名字,然后用点运算符的方式调用其中的成员变量或成员函数。( 且无法享受ts自动导入的智能提示功能 )
    ```
    export default {
        name: "Brannua",
        sum: function( a : number, b : number ){
            return a + b;
        }
    }
    ```
    ```
    import myModule from "./myModule";
    console.log( myModule.name );
    console.log( myModule.sum( 1, 2 ) );
    ```