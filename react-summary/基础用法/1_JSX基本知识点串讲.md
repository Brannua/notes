- *.js 中编写 类xml语法，称为 JSX

  - 注意，自定义的组件名首字母一定要大写！！！

  - 普通 html 标签正常写即可～

    ```js
      // 注意: 只有引入'react'包才可以编译JSX语法！！！
      import React from 'react';
      import Test from './Test.js';

      function Demo() {
        return (
          <div><Test></Test></div>
        )
      }

      export default Demo;
    ```

- jsx语法中的innerHTML会被自动转译，目的是防止xss攻击

- 若不想让其转译，可以使用属性 dangerouslySetInnerHTML

## JSX 基本使用

- 变量 & 表达式

- class & style

- 子元素 & 组件

```js
import React from 'react';

class JSXBaseDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'lpj',
      imgUrl: 'https://imgchr.com/i/t2QmNR',
      flag: true,
    }
  }

  render() {
    // // 获取变量
    // const pElem = <p>{ this.state.name }</p>
    // returen pElem;


    // // 表达式
    // const exprElem = <p>{ this.state.flag ? 'yes' : 'false' }</p>
    // returen exprElem;


    // // 子元素
    // const imgElem = <div>
    //   <p>我的头像</p>
    //   <img src={ this.state.imgUrl }>
    // </div>
    // return imgElem;


    // // class
    // const classElem = <p className='title'>设置 css class</p>
    // return classElem;


    // // style( 样式也可以写成内联的 )
    // const styleData = { fontSize: '30px', color: 'blue' }
    // const styleElem = <p style={styleData}>设置 style</p>
    // return styleElem;


    // // 原生 html
    // const rawHtml = '<span>富文本内容<i>斜体</i><b>加粗</b></span>'
    // const rawHtmlData = {
    //   __html: rawHtml   // 注意, 必须是这种格式
    // }
    // const rawHtmlElem = <div>
    //   <p dangerouslySetInnerHTML={ rawHtmlData }></p>
    //   <p>{ rawHtml }</p>
    // </div>
    // return rawHtmlElem;


    // // 加载组件
    // const componentElem = <div>
    //   <p>JSX 中加载一个组件</p>
    //   <hr/>
    //   <List />
    // </div>
    // return componentElem;
  }
}
```
