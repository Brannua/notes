- 用 JS 模拟 DOM结构，演示示例

  ```html
    <div id="div1" class="container">
      <p>vdom</p>
      <ul style="font-size:20px">
        <li>a</li>
      </ul>
    </div>
  ```

  ```tag props children```

  ```js
    {
      tag: 'div',
      props: {
        id: 'div1',
        className: 'container'
      },
      children: [{
        tag: 'p',
        children: 'vdom'
      },{
        tag: 'ul',
        props: {
          'style': 'font-size: 20px'
        },
        children: {
          tag: 'li',
          children: 'a'
        }
      }]
    }
  ```
