import React, {Component, Fragment} from 'react';

const MyInput = (props) => {
  return (
    <input type="text"
           ref={props.inputRef} />
  );
}

const FuncCustomComp = () => {
  let inputRef = null;
  const onClick = () => {
    inputRef.focus();
  }
  return (
    <div>
      <MyInput inputRef={(input) => {inputRef = input}}/>
      <input
        type="submit"
        value="submit"
        onClick={onClick} />
    </div>
  );
}

class Index extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    this.setState({
      name: 1,
    });
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('componentDidUpdate');
  }

  onClick() {
    alert(`yey, ${this.firstName.value} and ${this.lastName.value} have submitted`);
  }
  onKeyUp(type, e) {
    if (e.keyCode === 13) {
      switch (type) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
          break;
      }
    }
  }
  render() {
    console.log('render');
    return (
      <Fragment>
        <FuncCustomComp />
        <div>
          <span>First Name:</span>
          <input type="text"
                 ref={(input) => {
                   this.firstName = input;
                   console.log('ref');
                 }}
                 onKeyUp={this.onKeyUp.bind(this, 'firstName')} />
        </div>
        <div>
          <span>Last Name:</span>
          <input type="text"
                 ref={(input) => {this.lastName = input}}
                 onKeyUp={this.onKeyUp.bind(this, 'lastName')} />
        </div>
        <div>
          <span>Age:</span>
          <input
            type="text"
            ref={(input) => {this.age = input}}
            onKeyUp={this.onKeyUp.bind(this, 'age')} />
        </div>
        <div>
          <span>Submit</span>
          <input
            type="submit"
            value="submit"
            ref={(input) => {this.submit = input}}
            onKeyUp={this.onKeyUp.bind(this, 'submit')}
            onClick={this.onClick.bind(this)} />
        </div>
      </Fragment>
    );
  }
}

export default Index;
