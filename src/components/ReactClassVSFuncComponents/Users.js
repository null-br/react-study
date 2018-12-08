import React, { Component, Fragment } from 'react';
import User from './User';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'Danny', age: 18 },
        { name: 'Steven', age: 28 },
        { name: 'Tom', age: 38 },
      ]
    }
    this.makeMeYouger = this.makeMeYouger.bind(this);
  }

  makeMeYouger() {
    const temUsers = this.state.users.map((user) => {
      const tempUser = user;
      tempUser.age -= 10;
      tempUser.age = tempUser.age > 0 ? tempUser.age : 0;
      return tempUser;
    });
    this.setState({
      temUsers
    });
  }
  render(){
    return (
      <Fragment>
        <div onClick={this.makeMeYouger}>click me become youger!</div>
        <div>{this.props.title}</div>
        {this.state.users.map((item) => {
          return (
            <User age={item.age}>{item.name}</User>
          )
        })}
      </Fragment>
    );
  }
}

export default Users;
