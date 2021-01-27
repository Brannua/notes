# 在TS中书写commonjs模块化代码

- 导出
```
export = {
    name : "Brannua",
    sum(a:number, b:number){
        return a + b;
    }
}
```
- 导入
```
import myModule = require("./myModule");
```
-----------------------------------------------------
> 如果在tsconfig.json配置了`"esModuleInterop":true`
- 导入也可以写成下面这种方式
```
import myModule from "./myModule"
```