import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  str: PropTypes.string.isRequired,
  bool: PropTypes.bool,
  strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  arr: PropTypes.arrayOf(PropTypes.number),
  arrOfObj: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  })),
  // children: PropTypes.arrayOf(PropTypes.element),
  children: PropTypes.element,
}

const Test = (props) => {
  return (
    <Fragment>
      <p>{props.str}</p>
      <p>{props.bool ? 'bool' : 'no bool'}</p>
      <p>{props.strOrNum}</p>
      {props.arr.map((val) => {
        return (
          <p key={val}>{val}</p>
        );
      })}
      {props.arrOfObj.map((val) => {
        return (
          <p key={val.age}>{val.name}</p>
        );
      })}
      <h1>{props.children}</h1>
    </Fragment>
  );
}

Test.propTypes = propTypes;

class Index extends Component{
  render() {
    return (
      <Fragment>
        <Test
          str={'string'}
          bool={true}
          strOrNum={10}
          arr={[1,2,3]}
          arrOfObj={[{name: 'Danny', age: 10}, {name: 'Jenny', age: 20}]}
        ><div>Children</div></Test>
      </Fragment>
    );
  }
}

export default Index;
