/* 
    这里的本质是将数组当做对象来使用了
*/
let stuInfo = [];
// let stuInfo = {};

stuInfo['no123'] = {
    name: '张三',
    age: 12,
    sex: 'male'
}
stuInfo['no124'] = {
    name: '李四',
    age: 13,
    sex: 'male'
}
stuInfo['no125'] = {
    name: '王五',
    age: 14,
    sex: 'female'
}
stuInfo['no126'] = {
    name: '赵六',
    age: 15,
    sex: 'female'
}

module.exports = stuInfo;