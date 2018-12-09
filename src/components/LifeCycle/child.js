import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    console.log('Child constructor');
  }

  componentWillMount() {
    console.log('Child componentWillMount');
  }

  componentDidMount() {
    console.log('Child componentDidMount');
    // this.setState({
    //   name: 'Child name',
    // });
  }

  // re-render lifeCycle start
  componentWillReceiveProps() {
    console.log('Child componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Child shouldComponentUpdate');
    // console.log(nextProps, nextState);
    return true;
  }

  componentWillUpdate() {
    console.log('Child componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('Child componentDidUpdate');
  }

  // re-render lifeCycle end, render between componentWillUpdate and componentDidUpdate

  componentWillUnmount() {
    console.log('Child componentWillUnmount');
  }

  render() {
    console.log('Child render');
    return <div>{this.props.name} | {this.state.name}</div>
  }
}

export default Child;
