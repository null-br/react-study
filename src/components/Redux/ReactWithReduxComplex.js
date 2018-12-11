import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  age: state.age,
  history: state.history,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    onAgeUp: () => dispatch({
      type: 'AGE_UP',
      val: 1,
    }),
    onAgeDown: () => dispatch({
      type: 'AGE_DOWN',
      val: 1,
    }),
    onDelItem: (id) => dispatch({
      type: 'DEL_ITEM',
      key: id,
    })
  });
}

class ReactWithReduxComplex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.age}</h1>
        <button onClick={this.props.onAgeUp}>Add Up</button>
        <button onClick={this.props.onAgeDown}>Add Down</button>
        <ul>
          <li>age的历史记录：</li>
          {this.props.history.map(el => (
            <li
              key={el.id}
              onClick={() => this.props.onDelItem(el.id)}>{el.age}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReactWithReduxComplex);
