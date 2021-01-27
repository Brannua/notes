- 路由模式( hash, h5-history ), 同 vue-router

- 路由配置( 动态路由 & 懒加载 ), 同 vue-router

> 这些的基础用法可以再回顾学习视频或者官方文档啦~, 视频截图在本地哦

## 路由传参方式总结

## 路由传参

- 动态路由传参

  ```js
    // components
    <Link to={`/deatil/${ id }`}>
      // ...
    </Link>

    // App.js
    <BrowserRouter>
      <Route path='/detail/:id' exact component={Deatil} />
      // a lot of Route...
    </BrowserRouter>

    // another components get params
    this.props.match.params
  ```

- 查询字符串传参

  ```js
    // components
    <Link to={`/deatil?id=${ id }`}>
      // ...
    </Link>

    // App.js
    <BrowserRouter>
      <Route path='/detail' exact component={Deatil} />
      // a lot of Route...
    </BrowserRouter>

    // another components get params
    this.props.location.search
  ```
