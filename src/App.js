import React, { Component } from 'react';
import Users from './components/ReactClassVSFuncComponents/Users';

class App extends Component {
  render() {
    return (
      <div>
        <Users title="this is Users title from app" />
      </div>
    )
  }
}

export default App;

