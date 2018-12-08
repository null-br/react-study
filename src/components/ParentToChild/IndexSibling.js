import React, {Component, Fragment} from 'react';
import Parent from './parent';

class IndexSibling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'old world!',
    }
  }

  changeTheWorld(val) {
    this.setState({
      title: val,
    });
  }

  render() {
    return (
      <Fragment>
        <Parent title={this.state.title}
                type="sibling"
                changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')}
                keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}/>
      </Fragment>
    );
  }
}

export default IndexSibling;
