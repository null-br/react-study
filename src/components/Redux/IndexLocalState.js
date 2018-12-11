import React, { Component, Fragment } from 'react';

class ndexLocalState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 21,
    }
    this.addUp = this.addUp.bind(this);
    this.addDown = this.addDown.bind(this);
  }
  addUp() {
    this.setState({
      // ...state,
      age: ++this.state.age,
    });
  }
  addDown() {
    this.setState({
      // ...state,
      age: --this.state.age,
    });
  }
  render() {
    return (
      <Fragment>
        <h1>{this.state.age}</h1>
        <button onClick={this.addUp}>Add Up</button>
        <button onClick={this.addDown}>Add Down</button>
      </Fragment>
    );
  }
}

export default ndexLocalState;
