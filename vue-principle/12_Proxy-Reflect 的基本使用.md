# Object.defineProperty 的缺点

- 深度监听是一次性递归，data如果层级过深，是个性能瓶颈

- 无法监听新增属性和删除属性

- 无法原生监听数组，需要特殊处理

# Proxy-Reflect 的基本使用

```js
  const data = {  // or Array
    name: 'zhangsan',
    age: 20
  }

  const proxyData = new Proxy(data, {
    get(target, key, receiver) {
      // 只监听自身的属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('get', key)
      }

      return Reflect.get(target, key, receiver)
    },
    // 【注意】这里的set也可以监听到新增属性
    set(target, key, val, receiver) {
      // 重复的数据，不处理
      if (val === target[key]) {
        return true
      }

      console.log('set', key, val)
      return Reflect.set(target, key, val, receiver)
    },
    deleteProperty(target, key) {
      console.log('deleteProperty', key)
      return Reflect.deleteProperty(target, key)
    }
  })
```

# Reflect 的作用

- 和 Proxy 能力一一对应

- 规范化，函数式

- 将会逐渐替代Object上的工具函数
