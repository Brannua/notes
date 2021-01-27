- 有时异步( 普通使用 ), 有时同步( setTimeout, DOM事件 )

- 有时合并( 对象形式, 合并类似于Object.asign ), 有时不合并( 函数形式 )

## 核心要点

- setState 主流程 ( 左分支是异步( 处于batchUpdate机制中 ), 右分支是同步 )

  ![](https://s1.ax1x.com/2020/06/11/tHTq5F.png)

- batchUpdate 机制 ( 用来判断是同步更新还是异步更新 )

  - 哪些能命中 batchUpdate 机制

    - 生命周期( 和它调用的函数 )
    - React中注册的事件( 和它调用的函数 )
    - React可以管理的入口

  - 哪些不能命中batchUpdate机制

    - 定时器( 和它调用的函数 )
    - 自定义的DOM事件( 和它调用的函数 )
    - React管不到的入口

    ```js
      // 注意这里的函数形式都只是为了演示而已, 能不能命中batchUpdate机制是React说了算的, 而不是是个函数就可以
      func1 = () => {
        // 开始: 处于 batchUpdate
        // isBatchingUpdates = true
        this.setState({
          count: this.state.count + 1
        })
        // 结束
        // isBatchingUpdates = false
      }
    ```
    ```js
      func2 = () => {
        // 开始: 处于 batchUpdate
        // isBatchingUpdates = true
        setTimeout(() => {
          // 此时, isBatchingUpdates = false
          this.setState({
            count: this.state.count + 1
          })
        })
        // 结束
        // isBatchingUpdates = false
      }
    ```
    ```js
      func2 = () => {
        // 开始: 处于 batchUpdate
        // isBatchingUpdates = true
        document.body.addEventListener('click', () => {
          // 此时, isBatchingUpdates = false
          this.setState({
            count: this.state.count + 1
          })
        })
        // 结束
        // isBatchingUpdates = false
      }
    ```

- transaction 事务机制( 服务于batchUpdate机制 )

  ```js
    // 伪代码, 用于模拟演示
    transaction.initialize = function() {
      log('initialize')
    }
    transaction.close = function() {
      log('close')
    }
    function method() {
      log('abc')
    }
    transaction.perform(method) // 'initialize' 'abc' 'close'
  ```

  ![](https://s1.ax1x.com/2020/06/11/tHqoz4.png)

