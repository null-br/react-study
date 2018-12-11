import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  age: state.age,
});
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'}),
  }
};
class ReactWithReduxSimple extends Component {
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
)(ReactWithReduxSimple);
