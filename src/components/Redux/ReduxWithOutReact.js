/*
 * 这个文件放在React项目下，但是和React没有任何关系
 * 本文件只为了演示Redux是如何工作的
 * 我们需要在生产环境安装npm i redux --save
 * 使用node直接执行该文件可查看结果
 *
 * 如果我们的项目没有依赖babel，则我们需要使用require 将redux引入
 * const { createStore } = require('redux');
 *
 * 思路：
 * （1）创建store
 * （2）store包含state 和reducer
 * （3）reducer需要action
 * （4）dispatch action
 * （5）发布订阅通知UI更新
*/

const { createStore } = require('redux');

const initialState = {
  age: 20,
};

const myReducer = (state = initialState, action) => {
  const newSate = Object.assign({}, state);

  if (action.type === 'ADD') {
    newSate.age += action.val;
  }

  if (action.type === 'SUB') {
    newSate.age -= action.val;
  }

  return newSate;
};

// 定义action对象
const actionObjAdd = {
  type: "ADD",
  val: 21,
}

const actionObjSub = {
  type: "SUB",
  val: 5,
}


// 创建store
const store = createStore(myReducer);

store.subscribe(() => {
  console.log('subscribe: ' + JSON.stringify(store.getState()));
});

console.log(store.getState());

store.dispatch(actionObjAdd);

console.log(store.getState());

store.dispatch(actionObjSub);

console.log(store.getState());
