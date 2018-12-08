import React from 'react';

const child = (props) => {
  return (
    <button onClick={props.doSomeThing}>{props.title}</button>
  );
}

export default child;
