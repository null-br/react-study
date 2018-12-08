import React, { Component } from 'react';
import UniqueId from 'react-html-id';
import ListsAndKeys from "./ListsAndKeys";

class Index extends Component {
  constructor(props) {
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      title: 'old world!',
      users: [
        { id: this.nextUniqueId(), name: 'jill', age: 14 },
        { id: this.nextUniqueId(), name: 'hey', age: 24 },
        { id: this.nextUniqueId(), name: 'jim', age: 34 },
      ]
    }
  }

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
      <ul>
        {this.state.users.map((user, index) => {
          return (<ListsAndKeys
            age={user.age}
            changeEvent={this.changeUserName.bind(this, user.id)}
            delEvent={this.delUserName.bind(this, index)}>{user.name}</ListsAndKeys>);
        })}
      </ul>
    )
  }
}

export default Index;
