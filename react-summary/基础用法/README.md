# React( https://reactjs.org/ )

> Facebook 推出，2013年开源

- React 属于视图层框架，配合 Redux 等数据层框架可以适应大型项目开发

  - MVVM: 关注数据而不关注DOM

  - React API 比 Vue.js 更少，灵活性更高

  - React 可以与 Vue、jQuery 等框架并存

# 开发原则

- 组件化开发

- 函数式编程

  - 有利于函数拆分，易维护

  - 有利于前端自动化测试

## 开发环境搭建

> 可以通过引入.js文件来使用React，但性能差，不易维护，只适合做demo

> 可以通过脚手架工具来编码，脚手架工具由Webpack、GRUNT、Gulp等工具编写而来

> 脚手架工具繁多，这里选用官方的 Create-react-app

- node: 12.16.1
- npm: 6.13.4
- npx: 6.13.4

  ```
    npx create-react-app my-app
    cd my-app
    npm start
  ```

- https://github.com/Brannua/ReactTodolist
