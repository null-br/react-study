import React from 'react';
import commonStyles from '../styles/commonStyles';

// HOC组件做了什么，把一个组件作为参数，对props经过处理（traslate），返回新的props，然后将新props传给这个参数组件
// 并返回新的组件
// 新组件和旧组件的区别是什么？
// 组件没有变化，只是将处理props的逻辑放在了HOC中
// 可以和HigherOrderComponents/ButtonTwo的写法做下对比

const transProps = (props) => {
  let _styles = Object.assign({}, commonStyles.default);
  if (props.disable) {
    _styles = Object.assign({}, _styles, commonStyles.disable);
  }
  const newProps = Object.assign({}, props, {styles: _styles});
  return newProps;
};

// 匿名函数接收一个组件作为参数（形参WrappedComponent）
// 形参args是形参WrappedComponent代表的组件的props
export default (WrappedComponent) => {
  return (args) => {
    return WrappedComponent(transProps(args));
  }
};
