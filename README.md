# react-study
1. ReactClassVSFuncComponents: Users VS User 分别由React class 和 es6 function定义组件，二者区别如下
 （1）前者需要引Component，后者不需要
 （2）前者需要render，后者不需要
 （3）前者props是自动有效的，通过this.props直接调用，后者要传给匿名函数作为参数
 （4）有state的时候使用前者，纯函数使用后者
 任何组件的attribute都是挂载在props，attribute可以是加法，变量，字符串，数字，三元表达式，但是不能是loop，attribute不能定义
 为for和class，因为jsx不允许,组件里包含的内容，都挂载在props.children下
 ```jsx
 <p className="text" count={1+1}>this is text</p>
 <div htmlFor="demo"></div>
 ```
