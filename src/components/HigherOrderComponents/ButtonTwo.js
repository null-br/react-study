import React from 'react';

const styles = {
  default: {
    backgroundColor: '#737373',
    color: '#eae8e8',
    padding: '10px',
  },
  disable: {
    backgroundColor: '#9c9c9c',
    color: '#c7c6c6',
  }
}

const ButtonTwo = (props) => {
  // u can use spread operator but u must https://babeljs.io/docs/en/next/babel-plugin-proposal-object-rest-spread.html
  /*let _styles = {...styles.default};
  if (props.disable) {
    _styles = {..._styles, ...styles.disable};
  }*/

  let _styles = Object.assign({}, styles.default);
  if (props.disable) {
    _styles = Object.assign({}, _styles, styles.disable);
  }
  return (
    <div>
      <p>ButtonTwo: 通过外部控制组件</p>
      <button style={_styles}>ButtonTwo</button>
    </div>
  );
}

export default ButtonTwo;
