```js
  // Model
  const data = {
    name: 'zhangsan',
    age: 20,
    info: {
      address: '北京' // 需要深度监听(1)
    }
  }

  // View ( 模拟视图更新 )
  function updateView() {
    console.log('视图更新')
  }

  // 监听对象属性
  function observer(target) {
    if (typeof target !== 'object' || target == null) {
      return target
    }
    // for in 可以遍历对象和数组
    for (let key in target) {
      const val = target[key]
      defineReactive(target, key, val)
    }
  }

  // 重新定义各个属性，监听起来
  function defineReactive(target, key, value) {
    // 深度监听(1)
    observer(value)
    // 核心 API
    Object.defineProperty(target, key, {
      get() {
        return value
      },
      // 注意 value 在闭包里
      set(newVal) {
        if (newVal !== value) {
          // 数据更新
          value = newVal
          // 深度监听(2)
          observer(value)
          // 触发视图更新
          updateView()
        }
      }
    })
  }

  // 监听数据
  observer(data)

  // 测试
  data.name = 'lisi'
  data.info.address = '上海'
  data.age = { num: 21 }    // 需要深度监听(2)
  data.age.num = 22

  data.x = '100'    // 新增属性监听不到，所以有Vue.set
  delete data.name  // 删除属性监听不到，所以有Vue.delete
```

- Object.defineProperty 的缺点

  - 深度监听，需要递归到底，一次性计算量大

  - 无法监听新增属性/删除属性 ( Vue.set / Vue.delete )

  - 不能监听数组，需要特殊处理

> Vue3.0: Proxy，旨在解决如上的两个缺点

- 兼容性差 & 无法polyfill