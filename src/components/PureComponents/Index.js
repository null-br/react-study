import React, { Component, PureComponent } from 'react';

const Temp = (props) => {
  console.log('render Temp');
  return (
    <div>{props.val}</div>
  );
}
// PureComponent是浅拷贝，所以只适合只有一个叶子组件的情况，如果我们setState传多维数组，一维相同的时候会认为组件没有变换
class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
    }
  }

  componentDidMount() {
    // 模拟一次AJAX请求
    setInterval(() => {
      this.setState({
        val: 1,
      })
    //
    //   // 等价于上面的写法
    //   /*this.setState(() => {
    //     return {val: 1}
    //   });*/
    }, 2000)
  }

  // 解决setState重复渲染相同value的现象，没有使用PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.state.val === nextState.val ? false : true);
  // }

  render() {
    console.log('render Index');
    return (
      <div>
        <Temp val={this.state.val} />
      </div>
    );
  }
}

export default Index;
