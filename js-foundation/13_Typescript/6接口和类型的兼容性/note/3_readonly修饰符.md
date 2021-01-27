# 只读(readonly)修饰符

```
interface User {
    readonly id: string
    name: string
    age: number
}
let u: User = {
    id: "001",
    name: "Brannua",
    age: 20
}
u.id = "002";//Cannot assign to 'id' because it is a read-only property.
```
- 只读数组( 数组一旦创建就不能破坏该数组的结构, 但是可以对数组重新开辟空间创建新数组 )
```
let arr1: readonly number[] = [1, 2, 3];
let arr2: ReadonlyArray<number> = [1, 2, 3];
arr1 = [2, 3, 4];// 不会报错, 因为这是重新开辟空间创建新数组, 若let修改为const则报错
arr1[0] = 222;// 报错read-only property.
```
```
interface User {
    readonly id: string
    name: string
    age: number
    readonly arr:string[]
}
let u:User = {
    id: "001",
    name: "Brannua",
    age:20,
    arr: ['1','2','3']
}
u.arr.push("1");// 不会报错
u.arr = ['2', '3', '4'];//报错因readonly
```
> 只读修饰符不在编译结果中