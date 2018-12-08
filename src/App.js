import React, { Component } from 'react';
// import Users from './components/ReactClassVSFuncComponents/Users';
import ReactEventAndTwoWayDataBinding from './components/ReactEventAndTwoWayDataBinding/ReactEventAndTwoWayDataBinding';

class App extends Component {
  render() {
    return (
      <div>
        {/*<Users title="this is Users title from app" />*/}
        <ReactEventAndTwoWayDataBinding />
      </div>
    )
  }
}

export default App;

