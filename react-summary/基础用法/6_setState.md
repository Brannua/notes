## React 函数式编程　( 纯函数理念 )

- 不要直接修改 state, 使用不可变值

```js
  // 错误
  this.state.count++;
  // 正确
  this.setState({
    count: this.state.count + 1
  })

  // 不可变值 - 数组
  // 注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值
  const list5Copy = this.state.list5.slice() // 拷贝副本
  list5Copy.splice(2, 0, 'a') // 操作副本: 中间插入/删除
  this.setState({
      list1: this.state.list1.concat(100), // 追加
      list2: [...this.state.list2, 100], // 追加
      list3: this.state.list3.slice(0, 3), // 截取
      list4: this.state.list4.filter(item => item > 100), // 筛选
      list5: list5Copy // 其他操作
  })


  // 不可变值 - 对象
  // 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值
  this.setState({
      obj1: Object.assign({}, this.state.obj1, {a: 100}),
      obj2: {...this.state.obj2, a: 100}
  })
```

- 可能是异步更新也可能是同步更新

```js
  this.setState({
    count: this.state.count + 1
  }, () => {
    // 联想 Vue $nextTick - DOM
    console.log('count by callback', this.state.count) // 回调函数中可以拿到最新的 state
  })
  console.log('count', this.state.count) // 异步的，拿不到最新值


  // setTimeout 中 setState 是同步的
  // 注意在 componentWillUnmount 中应该及时 clearTimeout
  var timer = setTimeout(() => {
    this.setState({
      count: this.state.count + 1
    })
    console.log('count in setTimeout', this.state.count)
  }, 0)


  // 自己定义的 DOM 事件，setState 是同步的。在 componentDidMount 中
  // 注意在 componentWillUnmount 中应该及时解绑事件
  componentDidMount() {
    // 自己定义的 DOM 事件，setState 是同步的
    document.body.addEventListener('click', this.bodyClickHandler)
  }
  bodyClickHandler = () => {
    this.setState({
        count: this.state.count + 1
    })
    console.log('count in body event', this.state.count)
  }
  
  componentWillUnmount() {
    // 及时销毁自定义 DOM 事件
    document.body.removeEventListener('click', this.bodyClickHandler)
    // 及时clearTimeout
    clearTimeout(timer)
  }
```

- 可能会被合并

```js
  // 传入对象，state 异步更新，更新前会被合并（ 类似 Object.assign ）。执行结果只一次 +1
  this.setState({
    count: this.state.count + 1
  })
  this.setState({
    count: this.state.count + 1
  })
  this.setState({
    count: this.state.count + 1
  })

  // 传入函数，不会被合并。执行结果是 +3
  this.setState((prevState, props) => {
    return {
      count: prevState.count + 1
    }
  })
  this.setState((prevState, props) => {
    return {
      count: prevState.count + 1
    }
  })
  this.setState((prevState, props) => {
    return {
      count: prevState.count + 1
    }
  })
```
