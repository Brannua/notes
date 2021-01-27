### 什么是Redux中间件

- action --> middleWare --> store 

- Redux中间件本质是加强版的dispatch，普通的dispatch只能处理JS对象，而Redux中间件拥有处理JS函数的能力

![](https://s1.ax1x.com/2020/06/01/tGIsg0.png)

### Redux-thunk 中间件: 将异步逻辑拆分到actionCreator

- 集成redux-thunk中间件后:

  - 1、actionCreator 的返回值就不仅可以是对象了，还可以是函数

  - 2、我们可以将 [异步代码( 比如发送ajax请求 ), 逻辑复杂的代码] 拆分到该函数中

    - 2-1、便于代码的扩展和维护

    - 2-2、便于代码的自动化测试

  - 3、redux-thunk中间件会在你手动触发dispatch(func)的时候自动执行func，且func的第一个默认参数为dispatch方法

### Redux-saga 中间件: 将异步逻辑拆分到独立文件中

- 不使用Redux的中间件Redux-saga的时候，只有在reducer中可以处理接收到派发的action

- 当Redux集成了中间件Redux-saga后，在sagas中就可以使用takeEvery方法捕获到派发的action，进而可以做一些操作。

- 所以我们可以将 [异步代码( 比如发送ajax请求 ), 逻辑复杂的代码] 拆分到sagas中

> Redux-thunk vs Redux-saga

- Redux-thunk 将异步代码和复杂逻辑拆分到actionCreator中
- Redux-saga 将异步代码和复杂逻辑拆分到单独文件中

- Redux-thunk 没有什么API，只是实现了action可以是函数
- Redux-saga 有一些API，但是在更大型项目的开发维护中比前者更好用
