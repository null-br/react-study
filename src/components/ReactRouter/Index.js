import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
// import  from 'react-router-dom/Route';

// const User = ({match}) => {
//   console.log(match);
//   return (
//     <h1>Welcome User {match.params.username}</h1>
//   );
// }
const User = ({username}) => {
  return (
    <h1>Welcome User {username}</h1>
  );
}
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  changeLoggedIn() {
    this.setState((preState) => {
      return {
        loggedIn: !preState.loggedIn,
      };
    });
  }

  render() {
    return (
      <Router>
        <Fragment>
          <ul>
            <li><Link to="/"/></li>
            <li><NavLink to="/" activeStyle={{color: 'green'}} exact>Home</NavLink></li>
            <li><NavLink to="/about" activeStyle={{color: 'green'}}>About</NavLink></li>
            <li><NavLink to="/user/john" activeStyle={{color: 'green'}}>user john</NavLink></li>
            <li><NavLink to="/user/peter" activeStyle={{color: 'green'}}>user peter</NavLink></li>
          </ul>
          <Prompt
            when={!this.state.loggedIn}
            message={(location) => {
              return location.pathname.startsWith('/user') ? 'Please login first' : true;
            }}
          />
          <Route path="/" exact render={
            () => {
              return (<h1>welcome Home</h1>);
            }
          } />
          <Route path="/about" exact render={
            () => {
              return (<h1>welcome About</h1>);
            }
          } />
          {/*<Route path="/user/:username" exact component={User} />*/}

          {/*模拟是否登录的场景*/}
          <Route path="/user/:username" exact strict render={({match}) => (
            this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
          )} />
          <input type="button"
                 value={this.state.loggedIn ? 'log out' : 'log in'}
                 onClick={this.changeLoggedIn.bind(this)}/>
        </Fragment>
      </Router>
    );
  }

}

export default Index;
