import React, { Component } from 'react';
// import Users from './components/ReactClassVSFuncComponents/Users';
// import ReactEventAndTwoWayDataBinding from './components/ReactEventAndTwoWayDataBinding/ReactEventAndTwoWayDataBinding';
import Parent from './components/ParentToChild/parent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'old world!'
    }
  }

  /*doSomeThing(val) {
    this.setState({
      title: val,
    });
  }*/

  changeTheWorld(val) {
    this.setState({
      title: val,
    });
  }
  render() {
    return (
      <div>
        {/*<Users title="this is Users title from app" />*/}
        {/*<ReactEventAndTwoWayDataBinding />*/}

        {/*<p>grandFather, father and child communicate</p>*/}
        {/*<Parent title={this.state.title} doSomeThing={this.doSomeThing.bind(this, 'new world')}/>*/}

        {/*<p>siblings communicate</p>*/}
        <Parent title={this.state.title}
                changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')}
                keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}/>
      </div>
    )
  }
}

export default App;

