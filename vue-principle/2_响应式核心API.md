
> 组件 data 的数据一旦变化，立刻触发视图的更新

- Vue2.x: Object.defineProperty

  ```js
    // 基本用法
    const data = {}

    let name = 'zhangsan'

    Object.defineProperty(data, 'name', {
      get() {
        console.log('get')
        return name
      },
      set(newVal) {
        console.log('set')
        name = newVal
      }
    })
  ```
