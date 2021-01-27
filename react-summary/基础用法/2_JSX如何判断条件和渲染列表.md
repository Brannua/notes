## JSX 如何判断条件和渲染列表

- if else

- 三元表达式

- 逻辑运算符 && ||

  ```js
    import React from 'react';

    class ConditionDemo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          theme: 'black',
        };
      }

      render() {
        const blackBtn = <button className='btn-black'>black btn</button>
        const whiteBtn = <button className='btn-white'>white btn</button>

        // // if-else
        // if (this.state.theme === 'black') {
        //   return blackBtn;
        // } else {
        //   return whiteBtn;
        // }

        // // 三元运算符
        // return <div>
        //   { this.state.theme === 'black' ? blackBtn : whiteBtn }
        // </div>

        // // &&
        // return <div>
        //   { this.state.theme === 'black' && blackBtn }
        // </div>
      }
    }
  ```

- 渲染列表 ( map & key )

  ```js
    import React from 'react';

    class ListDemo extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          list: [{
            id: 'id-1',
            title: '标题1',
          }, {
            id: 'id-2',
            title: '标题2',
          }, {
            id: 'id-3',
            title: '标题3',
          }]
        }
      }

      render() {
        return (
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <li key={ item.id }>
                    index { index }; title { item.title }
                  </li>
                )
              })
            }
          </ul>
        )
      }
    }
  ```