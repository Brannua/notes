Proxy重写响应式

- 实现基础功能

- 实现深度监听 ( 只有在触发getter时才往下递归一层，提升了性能！！ )

- 区分触发setter时，属性是原有的还是新增的

```js
  const data = {
    name: 'zhangsan',
    age: 20,
    info: {
      city: 'beijing'
    }
  }

  function defineReactive(target) {
    if (typeof(target) !== 'object' || target == null) {
      return
    }

    const proxyConf = {
      get(target, key, receiver) {
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
          console.log('get', key)
        }

        const result = Reflect.get(target, key, receiver)
        // 实现深度监听 ( data数据结构中不论层级，引用值都应被proxy处理 )
        // 在getter中递归，即用到才会往下一级递归一下，提升了性能！！！
        return defineReactive(result)
      },
      set(target, key, val, receiver) {
        if (val === target[key]) {
          return true
        }

        // 区分触发setter时，属性是原有的还是新增的
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
          console.log('已有的key', key)
        } else {
          console.log('新增的key', key)
        }

        console.log('set', key, val)
        return Reflect.set(target, key, val, receiver)
      },
      deleteProperty(target, key) {
        console.log('deleteProperty', key)
        return Reflect.deleteProperty(target, key)
      }
    }

    return new Proxy(target, proxyConf)
  }

  defineReactive(data)
```
