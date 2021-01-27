# JS开发中的问题

```
function getUserName() {
    if (Math.random() < 0.5) {
        return 'xiao liu';
    }
    return 404;
}

let myname = getUserName();
mynema = myname.split(" ")
    .filter(it => it)
    .map(it => it[0].touppercase() + it.subStr(1))
    .join(" ");
```

- 使用了不存在的成员变量,成员函数

- 把一个不确定的类型当做确定的类型进行处理 

```
const obj1 = null;
const obj2 = undefined;
console.log(obj1.name);
console.log(obj2.name);
// TypeError: Cannot read property 'name' of null
```

- JS语言本身的特性,决定该语言无法适应大型的复杂项目
- JS是弱类型语言: 某个变量,可以随时更换类型
```
let width = 500;
// ......
width = "500px";( 这里埋下隐患 )
// ......
document.getElementById('xxx').style.width = width + "px";( 这里报错 )
```
- JS是解释型: 错误发生的时间是在运行时

> 前端开发中,大部分时间都是在排错！！！