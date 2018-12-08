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
        <br/>
        <br/>
        <input type="text" onChange={this.changeNameWithInput.bind(this)} value={this.state.name}/>
        <br/>
        <br/>
        <input type="text" onChange={(e) => this.changeNameWithInput(e)} value={this.state.name}/>
        <br/>
        <br/>
        <input type="text" value={this.state.name} readOnly={true}/>
        <br/>
        <br/>
        <div>{this.state.name}</div>
      </Fragment>
    )
  }
}

export default ReactEventAndTwoWayDataBinding;
