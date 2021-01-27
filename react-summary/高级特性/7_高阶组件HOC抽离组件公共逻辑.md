## 关于组件公共逻辑的抽离

- mixin, 已经被React废弃

- 高阶组件HOC( High Order Components )

```js
  // 高阶组件不是一种功能, 而是一种模式
  const HOCFactory = (Component) => {
    class HOC extends React.Component {
      // 在此定义多个组件的公共逻辑
      render() {
        // 返回拼装的结果, 透传所有props
        return <Component {...this.props} />
      }
    }
    return HOC
  }
  const EnhancedComponent1 = HOCFactory(WrappedComponent1)
  const EnhancedComponent2 = HOCFactory(WrappedComponent2)
```
```js
  // eg. react-redux connect 就是高阶组件的用法
  import { connect } from 'react-redux';
  const HOCDemo = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Demo);
  export default HOCDemo;
```
```js
  // connect 源码
  export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
      constructor() {
        super()
        this.state = {
          allProps: {}
        }
      }
      // 此处省略N行代码
      render() {
        return <WrappedComponent {...this.state.allProps} />
      }
    }
    return Connect
  }
```
