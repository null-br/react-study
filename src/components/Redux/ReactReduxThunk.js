import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ageUp, ageDown } from '../../Store/Action/action';
import logo from '../../images/logo.svg';

class ReactReduxThunk extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <h1>{this.props.age}</h1>
        <button onClick={() => this.props.ageUp(1)}>Add Up</button>
        <button onClick={() => this.props.ageDown(1)}>Add Down</button>
        {this.props.loading}
        {this.props.loading && <img src={logo} className="react-logo" />}
      </Fragment>
    );
  }
}

export default connect((state) => ({
    age: state.reducerAge.age,
    loading: state.reducerAge.loading,
  }), {
    ageUp,
    ageDown,
  },
)(ReactReduxThunk);

