

### react-study

#### 1. 两种定义组件的方式：ReactClassVSFuncComponents夹下

 Users VS User 分别由React class 和 es6 function定义组件，二者区别如下

- 前者需要引Component，后者不需要
- 前者需要render，后者不需要
- 前者props是自动有效的，通过this.props直接调用，后者要传给匿名函数作为参数
- 有state的时候使用前者，纯函数使用后者

 任何组件的attribute都是挂载在props，attribute可以是加法，变量，字符串，数字，三元表达式，但是不能是loop，attribute不能定义为for和class，因为jsx不允许,组件里包含的内容，都挂载在props.children下

 ```jsx
 <p className="text" count={1+1}>this is text</p>
 <div htmlFor="demo"></div>
 ```

####  2.state和props

1. props来自组件外部，state来自组件内部，发生变化的时候会调render函数重新渲染，改变state使用setState方法，举个例子：

   ```javascript
   changeState = () => {
     this.setState({
       name: 'new Name',
     });
     console.log(this.state.name); // not 'new Name',still previous value
   }
   ```

   此处还是原来的name值，不能用`this.state.name = 'new Name'`是因为state里的值来自virtual dom，这样赋值，react不知道在干什么，必须通过一个动作告诉react，而setState就是这个动作，setState改变state的过程大致如下：

   - setState里返回了JSON对象，然后告诉它的组件，Hi，guys，有新的state来了
   - 组件拿到新的state值和原来的比较，发现只有name变了
   - 然后和HTML比较，通过diff算法，替换只改变的node 节点

2. setState的同步异步问题：

   - 在React生命周期或者React event handler 是异步
   - 延时回调或者原生事件，不一定是异步，因为没有经过react的事物流（多次setState合并成一次改变）

####  3.两种事件传参数的调用方式：demo在ReactEventAndTwoWayDataBinding文件下

1. ```jsx
   // 匿名函数法，此时不会立即执行，点击按钮的时候，匿名函数返回this.changeName立即执行
   <button onClick={() => this.changeName('BR is happy')}>change state use anonymous Function</button>

   <input type="text" onChange={(e) => this.changeNameWithInput(e)} value={this.state.name}/>
   ```

2. ```jsx
   // bind方法
   <button onClick={this.changeName.bind(this, 'BR is sad')}>change state use bind Function</button>

   <input type="text" onChange={this.changeNameWithInput.bind(this)} value={this.state.name}/>
   ```

当`input中`有`value`的时候，要么加`onChange`事件，要么设置`readOnly={true}`

#### 4.组件间的通信（demo在ParentToChild文件夹下）

1. 父子组件通信

   props，父组件通过props将state或者event handler传给子组件，在子组件中触发event handler，然后在父组件中调对应的方法执行，最后将改变后的state值传给子组件

2. 祖父组件，父组件，子组件通信

   和父子组件一样，不同点是父组件里调子组件的时候，props通过`{...props}`传进去的

   ```jsx
   // grandfather
   <Father handleEvent={this.state.eventClick} title={this.state.title} />
   // father
   <Child {...props} />
   // child
   const child = (props) => {
     <div onClick={props.handleEvent.bind(this)}>{props.title}</div> // title,handleEvent均来自祖父组件
   }
   ```

   ​

3. 兄弟组件间通信（无redux的情况下）

   - 通过共同的container，将所有的event handler传进去到共同父组件，父组件内部调子组件的时候在分别传不同的event handler

   ​       子组件为纯函数，无状态（stateless）的组件，也就是它内部不维护状态，所有状态全部来自外部

   - 没有共同container的兄弟组件通信：订阅发布模式，实现方法参考
     - [订阅发布模式](https://vmo-fed.github.io/js-design-pattern/publish-subscribe-pattern/)
     - [订阅发布模式实现事件总线](https://vmo-fed.github.io/js-design-pattern/use-publish-subscribe-pattern/)

#### 5.删除list中的某一项（demo在ListsAndKeys文件夹下）

使用了`react-html-id`第三方的库生成独一无二的id，以及用`findIndex`找到当前的index，删除用了slice，上述所有操作均在父组件完成

#### 6.Fragment用法（React version >= 16）

- 包裹元素，渲染时会remove掉自己，不在html中显示
- 将html 标签显示在页面上时可以使用Fragment来包裹
- [详细资料](https://vmo-fed.github.io/react/react-Fragments/)

#### 7.生命周期（LifeCycle文件夹下）

生命周期是一些函数，用来让我们在正确的时机做正确的事，以下是依次执行的生命周期

- （1）constructor：初始化render的时候调用，只执行一次，init state在这里进行

- （2）componentWillMount：在constructor之后执行，只执行一次，是唯一一个在服务端渲染的时候执行的hook（only hook that executes on server rendering）component还没有mount（安装），此时state和props已经初始化，但是component还没有render

  - 我们可以在这里使用setState，使用场景：假设state根据props值改变，在此setState不会re-render component，这里的依旧是initial（初始化）state
  - 全局的一些方法可以在此定义，例如：window或者document

- （3）render：在componentWillMount之后执行，当state或者props改变的时候会re-render，所以在这里不能使用setState，如果我们有一个component tree，render的时候是从sub component（顶级组件）开始依次向children component分别调用constructor =>> componentWillMount =>> render，直到sub component finish rendering

- （4）componentDidMount：在render之后执行，只执行一次，如果有一个组件树，那么执行子组件的生命周期从父组件的render开始，直到子组件生命周期执行完毕才会执行父组件的componentDidMount，如下图所示[!img](./src/images/lifeCycle.png)

  - 我们可以在这里调用AJAX请求
  - 在这里创建发布订阅（在componentDidUnmount中要取消订阅）
  - 在这里也可以调用setState，会re-render component

- ***当我们重新渲染component的时候过程：

  - （1）componentWillReceiveProps：在这里可以看到即将给render的state和props，在这里不要改变props和state的值

  - （2）shouldComponentUpdate: 是否更新组件，返回true，则会更新，否则不更新

    ```jsx
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
    ```

  - （3）componentWillUpdate:  如果想定义一些变量基于state和props的变量，那么可以在这里定义，这里不可以使用setState，会重复re-render的过程，陷入死循环。

  - （4）componentDidUpdate：创建第三方UI库的 elements

    ```jsx
    componentDidUpdate(nextProps, nextState) {}
    ```

- (5) componentWillUnmount: 销毁的时候执行，我们可以在这里清除一些计数器

##### 8.Pure Components（demo参考PureComponents文件夹）

理解Pure Components在re-render过程中的作用

setState有个特点：只有调用了这个方法，就会re-render component，它不会检查value的值有没有改变，为了防止value一样的时候还会render，我们可以采用下面的方法：

- （1）shouldComponentUpdate
- （2）PureComponent：浅拷贝，所以只适合只有一个叶子组件的情况，如果我们setState传多维数组，一维相同的时候会认为组件没有变换，所以我们一般不要用PureComponent

##### 9.React router（demo在ReactRouter中）

使用的npm包有`react-router-dom`

```jsx
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt } from 'react-router-dom'; // 用来包裹最外层element
// import Route from 'react-router-dom/Route'; // 提供route tag，必须用一个element将所有Route包裹起来

// 常见Route的写法
// exact 匹配 '/about' 或者 '/about/' 不匹配 '/'，strict 严格匹配'/about/',不匹配'/about'
<Route path="/about/" exact strict render={
    () => {
      return (<h1>welcome About</h1>);
    }
  } />

<Route path="/user" exact component={User} />
<Route path="/user/:username" component={User} /> // 获取username的值：match.params.username

// 	模拟是否登录的场景，获取username的值：{username}
<Route path="/user/:username" exact strict render={({match}) => (
    this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
  )} />

// Link can't add activeStyle but NavLink
<Link to="/" exact>Home</NavLink>
<NavLink to="/" activeStyle={{color: 'green'}} exact>Home</NavLink>

// Prompt 用法，true表示不弹出提示框
<Prompt
  when={!this.state.loggedIn}
  message={(location) => {
    return location.pathname.startsWith('/user') ? 'Are u sure?' : true;
  }}
  />
```

##### 10.React Refs and DOM（demo见RefsAndDOM）

旧版ref直接赋值，现在已经废弃

现在采用`<input type="text" ref={(input) => {this.firstName = input}} />`这种回调的方式赋值

行参input是input元素（`<input type="text"`>）

该回调在componentDidMount前调用render后调用。如下图所示

[!img](./src/images/refs.png)

re-render的时候，ref中的回调连续执行2次

两种类型组件的调用方式：

- class 组件：直接使用this.XXX

- stateless Func：

  - 要操作的DOM和触发事件的元素在一个Function中

    ```jsx
    const fn = () => {
      let elRef = null;
      const onClick = () => {
        elRef.focus();
      }
      return (
      	<div>
        	<input ref={(input) => {elRef = input}} />
          	<input
              type="submit"
              value="submit"
              onClick={onClick} />
        </div>
      );
    }
    ```

    ​

  - 要操作的DOM和触发事件的元素不在一个Function中，父子关系，采用props关系，注意这里myFn中相当于调用了fn中的`{(input) => {elRef = input}}`回调函数，这样我们就实现了在父组件中调用子组件的DOM

  ```jsx
  const fn = () => {
    let elRef = null;
    const onClick = () => {
      elRef.focus();
    }
    return (
    	<div>
      	<myFn elRef={(input) => {elRef = input}} />
        	<input
            type="submit"
            value="submit"
            onClick={onClick} />
      </div>
    );
  }

  const myFn = (props) => {
    return (
    	<input ref={props.elRef} />
    );
  }
  ```

  ##### 11.prop-types：检查类型的几种常用用法（demo见PropTypes）

  特点是轻量

  ```jsx
  import PropTypes from 'prop-types';
  const Demo = () => {}
  Demo.propTypes = {
    str: PropTypes.string.isRequired,
    bool: PropTypes.bool,
    strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    arr: PropTypes.arrayOf(PropTypes.number),
    arrOfObj: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
    })),
    // children: PropTypes.arrayOf(PropTypes.element),
    children: PropTypes.element,
  }
  ```

  ##### 12.flow-bin （demo见flowBin）

  - --save-dev（--D）：devDependencies，devDependencies  里面的插件只用于开发环境，不用于生产环境
  - --save（--S）:dependencies，而 dependencies  是需要发布到生产环境的
  - [参考](https://blog.csdn.net/zDeer520/article/details/73431295)

  和props-types比较可以检测更多的类型，package.json的script中添加一个`"flow": "flow"`，初始化执行`npm run flow init`生成一个.flowconfig文件，具体用法[参考官网](https://flow.org/en/docs/usage/)

  ##### 13.react typeScript（demo见react-typescript）

  [create-react-app]脚手架里面集成了typescript，用来检查类型，用法[见官网](https://github.com/Microsoft/TypeScript-React-Starter)

  ```jsx
  // 使用interface 注意第一个字母必须为大写字母I
  export interface IMyClassProps {
      name?: string;
      age: number;
      isLived?: boolean;
      kids?: 1 | 2;
      livedIn?: ['BeiJing', 'HangZhou']
  }
  ```

  ##### 14.HOC（HigherOrderComponents）高阶组件

  demo见HigherOrderComponents文件，styles文件，HOC文件

  [React官网关于HOC的文档](https://reactjs.org/docs/higher-order-components.html)

  一句话说清楚HOC：它是一个函数，可以接受一个组件作为参数，对这个组件进行一些逻辑操作，然后返回新的组件。

  它是一种重用组件逻辑的思想，不属于React API。

  下面的写法是一种HOC模式

  ```jsx
  // HOC.js
  // 匿名函数接收一个组件作为参数（形参WrappedComponent）
  // 形参args是形参WrappedComponent代表的组件的props
  export default (WrappedComponent) => {
    return (args) => {
      return WrappedComponent(transProps(args));
    }
  };

  // 其他文件中调用方式
  import HOC from './HOC.js';
  class User extends Components {}
  export default HOC(User);
  ```

  ##### 15.Redux（demo见Redux/ReduxWithOutReact）

  1. Redux是什么？

    ​Redux是独立的，可以使用在各种框架中，是为了解决状态统一管理而产生的。

  2. 我们为什么要在React中使用Redux？

     因为在React中state是通过props传递的，当组件简单的时候管理state还不算复杂，当我们的项目达到一定的量级的时候，两种类型的组件：

  （1）嵌套组件：通过props从顶层传递，一直到最底层

  （2）不同页面的组件相互通信：需要一个共同的容器包裹起来，然后把状态放在这个容器中

  以上方法都会使得我们的状态可读性变差，又不好管理，如果我们使用一种全局存储state的模式就可以很好的解决这些问题。

  3. Redux的组成

     （1）Action：我们可以将它理解为一个命令，执行这个命令返回一个对象并将这个对象传给Reducer，

     ​	这个对象返回type，可以理解为命令的名称，然后再返回一个用来更新state的新值 val（这个变量名可以随便取）

     ```jsx
     // Action
     const actionObjAdd = {
       type: "INCE",
       val: 21,
     }
     // 触发action
     store.dispatch(actionObjAdd);
     ```

     （2）store:：由state和reducer组成

      - state是一个全局对象，它只能通过reducer改变

     ```jsx
     // state
     state = {
       age: 20,
     }
     ```

     ​

     - reducer是一个更新state的函数，它只能通过Action触发，接受一个Action对象和state，然后返回新的state

       - reducer发生了什么？

         （1）从Action拿到返回值，检查type是否为reducer中定义的类型

         （2）获取并复制当前state（我们不希望对state直接操作，所以复制state）

         （3）将Action中的val给state，返回新的state

     ```jsx
     // reducer
     if (action.type === 'INCE') {
       return {
         age: action.val,
       }
     }
     ```

     （3）更新UI：发布订阅模式

     ```jsx
     store.subscribe(() => {
       console.log('subscribe: ' + JSON.stringify(store.getState()));
     });
     ```

     ​

     #####16.React中使用Redux（demo见Redux/Index）

     Redux在React中的工作原理：

     （1）将local state替换成global state，将store挂在顶级组件下可以实现

     ```jsx
     import React from 'react';
     import { createStore } from 'redux';
     import { Provider } from 'react-redux';
     import ReactDOM from 'react-dom';
     import App from './src/App';
     import reducer from './src/Store/reducer';

     const store = createStore(reducer);

     ReactDOM.render(
       <Provider store={store}> /*这一行代码是将store全局注入*/
         <App/>
       </Provider>,
       document.getElementById('app')
     );

     ```

     ​

     （2）将redux的action和redux的state分别映射到props，这么做是为了方便组件获取变量和事件获取值，（因为我们不能使用local state，所以使用props）

     ```jsx
     // dispatch action
     const mapDispatchToProps = (dispatch) => {
       return {
         onAgeUp: () => dispatch({type: 'AGE_UP'}),
         onAgeDown: () => dispatch({type: 'AGE_DOWN'}),
       }
     };

     // 将redux中的state添加到props
     const mapStateToProps = (state) => ({
       age: state.age,
     });
     ```

     上面的两个变量如何与store联系起来？我们通过connect，connect来自react-redux，接收2个mapStateToProps, mapDispatchToProps两个变量，connect()是一个HOC，通过connect()，我们实现了为每个组件dispatch action 和subscribe state的功能。

     ```jsx
     import { connect } from 'react-redux';
     class App extend Componemt {}

     export default connect(mapStateToProps, mapDispatchToProps)(App);
     ```

     ​

     connect为我们把redux 的store.dispatch({})和store.subscribe(() => {})的功能集成在了react中，我们无需显式调用

  ​

  ​

  ​

  ​

  ​

  ​

  ​

  ##### 番外篇（如何踩坑，爬坑篇 ）：

  1. 项目中支持unexpected token spread operator 的解决方案，参考https://stackoverflow.com/questions/33745118/browserify-babel-6-gulp-unexpected-token-on-spread-operator

