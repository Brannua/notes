# 瀑布流注意事项
- 防止网络状态不好的时候用户多次重复下拉
    - 造成多次发送ajax请求,致使返回数据较多的情况
    - **加锁flag**
- 防止图片在尚未加载出来的时候判断最短列,然后列逐渐被加载回来的图片撑开
    - 造成最短列误判
    - **height/width = 计算出图片的高度/固定宽度**
    - **然后将计算出的图片高度给相应图片设置上**
- 防止图片加载失败图片外层的默认border样式
> 如果图片加载不出来,chrome浏览器会有一个默认1px的border
- 可以用onerror
    - 放一个默认图片
    - 监听图片加载失败, 并去掉border在chrome中的显示, 代码如下
```
<style>
.image-container{
    width:100px;
    height:100px;
    overflow:hidden;
    display:block;
}
.image-container img{
    margin:-1px;
}
</style>
<html>
    <body>
    <span class="image-container">
        <img src="path-to-image" width="102" height="102">
    </span>
    </body>
</html>
```
