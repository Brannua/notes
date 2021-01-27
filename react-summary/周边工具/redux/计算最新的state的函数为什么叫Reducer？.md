```js
  /**
   * Reducer: 纯函数！
   * 为什么这个函数叫做 Reducer 呢？
   * 因为它可以作为数组的reduce方法的参数。
   */

  const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'ADD':
        return state + action.payload;
      default: 
        return state;
    }
  };

  // 数组actions表示依次有三个 Action，分别是加0、加1和加2。
  const actions = [
    { type: 'ADD', payload: 0 },
    { type: 'ADD', payload: 1 },
    { type: 'ADD', payload: 2 }
  ];

  // 数组的reduce方法接受 Reducer 函数作为参数，就可以直接得到最终的状态3。
  console.log(
    actions.reduce(reducer, 0)
  );
```
