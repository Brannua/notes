- event 不是原生的, 而是SyntheticEvent合成事件对象, 它模拟了DOM事件的所有能力

- event.nativeEvent 是原生事件对象

- React 所有的事件都是挂载在document上的

![](https://s1.ax1x.com/2020/06/11/tH4gSI.png)

> 为什么要用合成事件机制?

- 为了更好的兼容性和跨平台

- 方便事件的统一管理( 如事务机制 )

> 为什么事件都挂载到document上?

- 挂载到document上, 利用事件委托的原理, 减少了内存消耗

- 避免组件频繁解绑事件, 因为事件都挂载到了document上, 而不是组件上, 组件就不需要解绑这些事件
