# let命令

- 基本用法
- 不存在变量提升(比如下面会报错a is not defined)
    ```
    a = 2;
    let a = 10;
    ```
- 暂时性死区
    - 使用 let 声明的变量会绑定在块级作用域(执行期上下文)
    ```
    {
        let b = 5;
    }
    let a = 10;
    console.log(a, b);
    // a 输出
    // b is not defined
    ```
- 同一作用域内不允许重复声明
    ```
    var i = 10;
    let i = 6;
    // 报错 ==> Identifier 'i' has already been declared
    ```
    > 三个不同的作用域就没事儿
    ```
    let i = 10;
    for (let i = 0; i < 10; i ++) {
        let i = 8;
        console.log(i);
    }
    console.log(i);
    ```