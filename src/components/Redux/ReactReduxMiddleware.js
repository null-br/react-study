import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { AGE_UP, AGE_DOWN } from '../../constants';

const mapStateToProps = (state) => ({
  age: state.reducerAge.age,
});
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: AGE_UP, val: 1}),
    onAgeDown: () => dispatch({type: AGE_DOWN, val: 1}),
  }
};
class ReactReduxMiddleware extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <h1>{this.props.age}</h1>
        <button onClick={this.props.onAgeUp}>Add Up</button>
        <button onClick={this.props.onAgeDown}>Add Down</button>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactReduxMiddleware);
