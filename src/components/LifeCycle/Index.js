import React, {Component, Fragment} from 'react';
import Child from "./child";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'HelSay',
    }
    console.log('Father constructor');
  }

  componentWillMount() {
    console.log('Father componentWillMount');
    // this.setState({
    //   name: 'componentWillMount name'
    // });
    // console.log(this.state.name); // HelSay

    // if (window.innerWidth < 500) {
    //   this.setState({
    //     innerWidth: window.innerWidth,
    //   });
    // }
  }

  componentDidMount() {
    console.log('Father componentDidMount');
    // this.setState({
    //   name: 'componentWillMount name'
    // });
  }

  componentWillReceiveProps() {
    console.log('Father componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Father shouldComponentUpdate');
    // console.log(nextProps, nextState);
    return true;
  }

  componentWillUpdate() {
    console.log('Father componentWillUpdate');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('Father componentDidUpdate');
  }

  changeState(val) {
    this.setState({
      name: val,
    });
  }

  unmountChild() {
    this.setState({
      name: 'robert',
    });
  }

  render() {
    console.log('Father render');
    if (this.state.name === 'robert') {
      return <div/>
    }
    return (
      <Fragment>
        Child: <Child name={this.state.name} />
        <div>father: {this.state.name}</div>
        <button onClick={() => this.changeState('new name')}>change state</button>
        <button onClick={() => this.unmountChild()}>unmount child</button>
      </Fragment>
    );
  }
}

export default Index;
