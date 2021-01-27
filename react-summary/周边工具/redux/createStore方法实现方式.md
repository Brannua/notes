- 参考: http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

```js
  /**
   * createStore方法的实现方式
   */
  const createStore = (reducer) => {

    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
      // Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。
      state = reducer(state, action);
      // State 一旦有变化，Store 就会调用监听函数。( 1、如下写法并未监控state的变化 )
      listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
      // 设置监听函数
      listeners.push(listener);
      // 返回解除监听该函数的方法
      return () => {
        listeners = listeners.filter(l => l !== listener);
      }

    };

    dispatch({}); // 2

    // createStore():store --> 3个API如下
    return { getState, dispatch, subscribe };
  };
```
