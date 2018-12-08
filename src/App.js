import React, { Component } from 'react';
// import Index from "./components/ListsAndKeys/Index";
// import Index from './components/ReactClassVSFuncComponents/Index';
// import Index from './components/ReactEventAndTwoWayDataBinding/Index';
import Index from './components/ParentToChild/IndexSibling';

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
      </div>
    )
  }
}

export default App;

