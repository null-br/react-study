

### react-study

##### 1. 两种定义组件的方式：ReactClassVSFuncComponents夹下

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

#####  2.state和props

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

#####  3.两种事件传参数的调用方式：demo在ReactEventAndTwoWayDataBinding文件下

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

##### 4.组件间的通信（demo在ParentToChild文件夹下）

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

##### 5.删除list中的某一项（demo在ListsAndKeys文件夹下）

使用了`react-html-id`第三方的库生成独一无二的id，以及用`findIndex`找到当前的index，删除用了slice，上述所有操作均在父组件完成

##### 6.Fragment用法（React version >= 16）

- 包裹元素，渲染时会remove掉自己，不在html中显示
- 将html 标签显示在页面上时可以使用Fragment来包裹
- [详细资料](https://vmo-fed.github.io/react/react-Fragments/)
