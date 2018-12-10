import React, {Component, Fragment} from 'react';

type FuncProp = {
  str: string,
}
const FuncComp = (props:FuncProp) => {
  return(<div>{props/str}</div>)
}

type TestProps = {
  str: string,
  num?: number,
  arr: Array<number>
}

type TestState = {
  message: string
}
class Test extends Component<TestProps, TestState> {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hi'
    }
  }

  static defaultProps = {
    str: 'test'
  }
  h1:?HTMLHeadingElement;

  render() {
    return (
      <Fragment>
        <h1>{this.props.str}</h1>
        <h1>{this.props.num}</h1>
        <h1>{this.props.arr}</h1>
        <h1>{this.props.str}</h1>
      </Fragment>
    );
  }

}
class Index extends Component {
  render() {
    return (
      <Fragment>
        <Test
          str={'str'}
          num={1}
          arr={[1,2,4]}
        />
        <FuncComp str={'str'} />
      </Fragment>
    );
  }
}

export default Index;
