console.log(123);

var showInfo = function() {
    console.log("hello world");
}
// 暴露模块接口
exports.say = 'nihao';
exports.showInfo = showInfo;