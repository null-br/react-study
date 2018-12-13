import React, { Component } from 'react';
import MemoComp from './Memo';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 1,
    };
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  // re-render
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('render');
    return (
      <div>
        <MemoComp age={this.state.age} />
        <button onClick={() => {return this.setState({age: 2})}}>change age</button>
      </div>
    );
  }

}

export default Index;
