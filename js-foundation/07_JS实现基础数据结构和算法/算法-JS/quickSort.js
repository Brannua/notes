/**
 * 快速排序
 */

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        /* 找基准值并剔除 */
        var index = Math.floor(arr.length / 2),
            baseArr = arr.splice(index, 1),
            /* 定义左右数组 */
            leftArr = [],
            rightArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] <= baseArr[0]) {
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);
            }
        }
        return quickSort(leftArr).concat(baseArr, quickSort(rightArr))
    }

}

(function () {
    let arr = [1, 4, 6, 2, 3, 9, 5, 0];
    console.log(arr);
    console.log(quickSort(arr));
})();