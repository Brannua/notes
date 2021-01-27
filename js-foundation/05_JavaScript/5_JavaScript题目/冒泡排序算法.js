//冒泡排序算法思路：
// 首先可以使用外层循环控制循环次数，
// 然后内层嵌套一个循环，使用数组中的每一个元素
// 与其他所有的元素进行比较，把最小的元素方在最左边；
// 也可以把大的元素放在右边，就可以进行冒泡了
var count = 0;

function bubble(arr) {
    console.log(arr);//打印传入的数组
    //外层循环控制循环次数
    for (var i = 0; i < arr.length; ++i) {
        //每一次内层循环把一个最大的值冒泡在数组的尾部；
        //优化： 在控制内层循环次数的部分减去i,;
        // 因为每一次内层循环都把一个最大的值冒泡到最右面
        // 因此可以不用比较了；
        var demo = arr.length - (i + 1);
        console.log(demo);//打印每一趟冒泡的循环次数

        for (var j = 0; j < demo; j++) {
            var temp;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(arr);
            count++;
        }
    }
    return arr;
}
console.log(bubble([12, 3, 42, 15, 6, 34, 14]));
console.log(count);//打印总共循环的次数