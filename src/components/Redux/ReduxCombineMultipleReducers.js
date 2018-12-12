import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { UPDATA_A, UPDATA_B } from '../../constants';
import {combineReducers} from "redux";

// 使用 Store/reducerAB 的时候mapStateToProps赋值如下：
/*const mapStateToProps = (state) => ({
  a: state.a,
  b: state.b,
});*/

// 使用 Store/reducerA， Store/reducerB
// a和b的值使用命名空间获取
// 在./index.js rootStore中
// 这里我们可以这样理解：combineReducers将多个reducer的state合并成一个，合并后的对象为state = {rA: reducerA, rB: reducerB}
const mapStateToProps = (state) => ({
  a: state.reducerA.a,
  b: state.reducerB.b,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    updateA: (b) => dispatch({ // Store.dispatch(action)
      type: UPDATA_A,
      b: b,
    }),
    updateB: (a) => dispatch({
      type: UPDATA_B,
      a: a,
    })
  });
}

class ReduxCombineMultipleReducers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>Redux Combine Multiple Reducers</h1>
        <p>项目开发中多人协作，每个人维护自己的reducer，然后将所有reducer合并后传给stroe，因为stroe只能接收一个reducer</p>
        <div className="wrap">
          <span>A: {this.props.a}</span>
          <button onClick={() => this.props.updateA(this.props.b)}>update A</button>
        </div>
        <div className="wrap">
          <span>B: {this.props.b}</span>
          <button onClick={() => this.props.updateB(this.props.a)}>update B</button>
        </div>
      </Fragment>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxCombineMultipleReducers);
