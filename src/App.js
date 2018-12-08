import React, { Component } from 'react';
// import ListsAndKeys from "./components/ListsAndKeys/Index";
import Index from './components/ReactClassVSFuncComponents/Index';
// import ReactEventAndTwoWayDataBinding from './components/ReactEventAndTwoWayDataBinding/ReactEventAndTwoWayDataBinding';
// import Parent from './components/ParentToChild/parent'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   UniqueId.enableUniqueIds(this);
  //   this.state = {
  //     title: 'old world!',
  //     users: [
  //       { id: this.nextUniqueId(), name: 'jill', age: 14 },
  //       { id: this.nextUniqueId(), name: 'hey', age: 24 },
  //       { id: this.nextUniqueId(), name: 'jim', age: 34 },
  //     ]
  //   }
  // }

  /*doSomeThing(val) {
    this.setState({
      title: val,
    });
  }*/

  // changeTheWorld(val) {
  //   this.setState({
  //     title: val,
  //   });
  // }

  delUserName(index, e) {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({users});
  }

  changeUserName(id, e) {
    const index = this.state.users.findIndex((user) => {
      return user.id === id;
    });

    const curUser = Object.assign([], this.state.users[index]);
    curUser.name = e.target.value;

    const users = Object.assign([], this.state.users);
    users[index] = curUser;

    this.setState({
      users,
    });
  }
  render() {
    return (
      <div>
        <Index/>
        {/*<ReactEventAndTwoWayDataBinding />*/}

        {/*<p>grandFather, father and child communicate</p>*/}
        {/*<Parent title={this.state.title} doSomeThing={this.doSomeThing.bind(this, 'new world')}/>*/}

        {/*<p>siblings communicate</p>*/}
        {/*<Parent title={this.state.title}*/}
                {/*changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')}*/}
                {/*keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}/>*/}
      </div>
    )
  }
}

export default App;

