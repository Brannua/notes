- JSX 等同于 Vue 模板

- Vue 模板不是 html

- JSX 也不是 js, 编译结果就是一堆React.createElement函数, 相当于h函数, 最终生成vnode

```js
  React.createElement('div', null, child1, child2, child3)
  React.createElement('div', {...}, [child1, child2, child3])
  React.createElement(Component, {...}, child1, child2, '文本节点')
```

- 虚拟DOM的优点

  - 大幅度提升性能

  - 使得跨端应用得以实现

    - 虚拟DOM --> 浏览器中的DOM --> 运行在浏览器

    - 虚拟DOM --> 原生移动端应用中的组件 --> 运行在原生App ( React Native )

-------------------------------------------

- https://www.babeljs.cn/repl 编译下面的代码

```js
// // JSX 基本用法
// const imgElem = (
// 	<div id="div1">
//   		<p>some text.</p>
//     	<img src={imgUrl} />
//   	</div>
// )

// JSX style
// const styleData = { fontSize: '30px', color: 'blue' };
// const styleElem = <p style={styleData}>设置style</p>

// // JSX 加载组件
// const app = (
// 	<div>
//   		<Input submitTitle={onSubmitTitle} />
//     	<List list={list}/>
//   	</div>
// )

// // JSX 事件
// const eventList = <p onClick={this.clickHandler}>some text</p>

// // JSX list
// const listElem = (
//   <ul>
//   	{
//   	this.state.list.map((item, index) => {
// 		return <li key={item.id}>index:{index}--title:{item.title}</li>
// 	})
//   }
//   </ul>
// )
```