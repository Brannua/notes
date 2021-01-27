## Portals 传送门

> 代码中的组件嵌套结构不会被破坏, 组件默认会按照既定层次嵌套结构渲染

- 但当使用了Portals, 在渲染DOM结构的时候组件会被渲染到指定位置, 例如( 如何让组件渲染到父组件以外? )

- 使用场景 ?

  - 父组件开启了BFC, 例如( overflow: hidden ), 当希望子组件不受BFC限制时

  - 当父组件的z-index值太小时

  - 当fixed元素需要放在body内部第一层时

```js
  import React from 'react';
  import ReactDOM from 'react-dom';

  function ProtalsDemo(props) {
    // // 正常渲染
    // return (
    //   <div>
    //     { props.children }  {/* 类似于 vue-slot */}
    //   </div>
    // )


    // 使用 Portals 将元素渲染到 body 内部第一层。
    // fixed 元素放在 body 上会有更好的浏览器兼容性。
    return (
      ReactDOM.createPortal(
        <div>{ props.children }</div>,
        document.body
      )
    )
  }
```

