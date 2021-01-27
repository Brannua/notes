# note

> 历史记录的管理,方便实现SPA单页面应用

> 通过修改hash和hashchange事件来实现历史记录管理

- pushState
```
history.pushState(state, title, url);// 添加一条历史记录
```
- replaceState
```
history.replaceState(state, title, url);// 替换当前的历史记录
```

> pushState 和 replaceState 只会改变导航栏url, 但是并不会刷新页面！

- popstate事件

> 历史记录发生改变时触发,但是调用pushState()和replaceState()不会触发

hashchange事件

> 页面的hash值改变的时候触发,常用语构建单页面应用