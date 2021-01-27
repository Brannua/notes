/* 
    深度克隆
*/
var obj = {
    name: "panda",
    age: 18,
    msg: {
        a: 1,
        b: 2,
        c: {
            x: 3,
            y: 4
        }
    },
    arr: [1, 2, 3]
}

// 方法一
// var newObj = JSON.parse(JSON.stringify(obj));

// 方法二
// 对象的深度克隆
function deepCloneObj(obj, newObj) {
    // 遍历对象属性
    for (var item in obj) {
        // 不克隆从原型链继承过来的属性
        if (obj.hasOwnProperty(item)) {
            // 如果属性是对象,则递归调用深度克隆
            if (obj[item] instanceof Object) {
                deepCloneObj(obj[item], {});
                // 如果属性是数组,则递归调用深度克隆
            } else if (obj[item] instanceof Array) {
                deepCloneObj(obj[item], []);
            } else {
                newObj[item] = obj[item];
            }
        }
    }
    return newObj;
}
// 数组的深度克隆
function deepCloneArr(arr, newArr) {
    // 遍历数组元素
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Object) {
            deepCloneArr(arr[i], {});
        } else if (arr[i] instanceof Array) {
            deepCloneArr(arr[i], []);
        } else {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

function deepClone(obj, newObj) {
    // 如果克隆对象
    if (obj instanceof Object) {
        newObj = {};
        return deepCloneObj(obj, newObj);
    } else if (obj instanceof Array) {
        newObj = [];
        return deepCloneArr(obj, newObj);
    } else {
        return newObj = obj;
    }
}

var newObj = {};
newObj = deepClone(obj, newObj);
console.log(newObj);
obj.age = 16;
obj.msg.a = 6;
obj.arr[1] = 666;
console.log(newObj);