import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { UPDATA_A, UPDATA_B } from '../../constants';

const mapStateToProps = (state) => ({
  a: state.a,
  b: state.b,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    updateA: () => dispatch({ // Store.dispatch(action)
      type: UPDATA_A,
    }),
    updateB: () => dispatch({
      type: UPDATA_B,
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
          <button onClick={this.props.updateA}>update A</button>
        </div>
        <div className="wrap">
          <span>B: {this.props.b}</span>
          <button onClick={this.props.updateB}>update B</button>
        </div>
      </Fragment>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxCombineMultipleReducers);
