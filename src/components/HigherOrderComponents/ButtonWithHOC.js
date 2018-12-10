import React from 'react';
import styleWrapper from '../HOC/styleWrapper';

const ButtonWithHOC = (props) => {
  return (
    <div>
      <p>ButtonWithHOC</p>
      <button style={props.styles}>ButtonWithHOC</button>
    </div>
  );
}

export default styleWrapper(ButtonWithHOC);
