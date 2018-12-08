import React, { Component, Fragment } from 'react';

class ReactEventAndTwoWayDataBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'BR'
    }
  }
  changeName(val) {
    this.setState({
      name: val,
    });
  }

  changeNameWithInput(e) {
    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <Fragment>
        <button onClick={() => this.changeName('BR is happy')}>change state use anonymous Function</button>
        <br/>
        <br/>
        <button onClick={this.changeName.bind(this, 'BR is sad')}>change state use bind Function</button>
        <p>使用bind</p>
        <input type="text" onChange={this.changeNameWithInput.bind(this)} value={this.state.name}/>
        <p>使用匿名函数</p>
        <input type="text" onChange={(e) => this.changeNameWithInput(e)} value={this.state.name}/>
        <p>只读：</p>
        <input type="text" value={this.state.name} readOnly={true}/>
        <div>{this.state.name}</div>
      </Fragment>
    )
  }
}

export default ReactEventAndTwoWayDataBinding;
