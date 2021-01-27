// 原生js监听DOM树的构建完毕
window.addEventListener('DOMContentLoaded', () => {
    // 初始化获取元素
    getNodes();
    // 给每个li绑定事件
    eachLiAddEvent();
}, false);