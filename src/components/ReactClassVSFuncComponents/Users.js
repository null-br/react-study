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
  }
  render(){
    return (
      <Fragment>
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
