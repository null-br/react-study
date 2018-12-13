import React, { Component, lazy, Suspense } from 'react';
const MyComp = lazy(() => import("./myComp"));

class Index extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <div>another component!</div>
        <Suspense fallback={<div>Loading MyComp......</div>}>
          <MyComp />
        </Suspense>
      </div>
    );
  }

}

export default Index;
