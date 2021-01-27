- 自己修改 dispatch -- logger实现

```js
  let next = store.dispatch
  store.dispatch = function(action) {
    console.log('dispatching...', action)
    next(action)
    console.log('next State...', store.getState())
  }
```

