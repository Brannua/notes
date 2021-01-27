- Render Props 的核心思想

  - 通过一个函数将 class 组件的 state 作为 props 传递给纯函数组件

  ```js
    const App = () => {
      <Factory render={
        // render 是一个函数组件
        (props) => <p>{props.a} {props.b} ...</p>
      }>
    }

    class Factory extends React.Component {
      constructor() {
        this.state = {/* 多个组件公共逻辑的数据 */}
      }
      // 修改 state ...
      render() {
        return <div>{ this.props.render(this.state) }</div>
      }
    }
  ```

- 抽离公共逻辑的两种方式对比

  - 其实HOC模式理解容易, 但是会增加组件层级, 且涉及props透传以及自定义属性传递命名需统一的问题

  - 但是RenderProp模式代码就简洁, 不会增加组件层级, 属性传递也方便

  - 看情况按需使用吧~

