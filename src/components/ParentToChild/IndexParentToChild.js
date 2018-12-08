import React, {Component, Fragment} from 'react';
import Parent from './parent';

class IndexParentToChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'old world!',
    }
  }

  doSomeThing(val) {
    this.setState({
      title: val,
    });
  }

  render() {
    return (
      <Fragment>
        <Parent
          title={this.state.title}
          type="parent"
          doSomeThing={this.doSomeThing.bind(this, 'new world')}/>
      </Fragment>
    );
  }
}

export default IndexParentToChild;
