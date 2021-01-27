# note

- 页面刷新前执行一次
- 1000ms 60fps ==> 16ms
- requestAnimationFrame(func)
- cancelAnimationFrame(id)
- 用法和setTimeout类似
- 兼容性写法如下
```
window.requestAnimationFrame = (function(){
    return window.requestAnimationFrame||
            window.webkitRequestAnimationFrame||
            window.mozRequestAnimationFrame||
            function(callback){
                window.setTimeout(callback, 1000/60);
            }
}());
window.cancelAnimationFrame = (function(){
    return window.cancelAnimationFrame||
            window.webkitcancelAnimationFrame||
            window.mozcancelAnimationFrame||
            function(id){
                window.clearTimeout(id);
            }
}());
```