/**
 * 归并排序
 * 
 */

function merge(leftArr, rightArr) {
    var arr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            arr.push(leftArr.shift());
        } else {
            arr.push(rightArr.shift());
        }
    }
    return arr.concat(leftArr, rightArr);
}

function mergeSort(arr) {
    if (arr.length > 1) {
        var index = Math.floor(arr.length / 2),
            leftArr = arr.slice(0, index),
            rightArr = arr.slice(index);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    } else {
        return arr;
    }
}

(function(){
    let arr = [3,6,2,7,2,4,9,1]
    console.log(arr);
    console.log(mergeSort(arr));
}())
