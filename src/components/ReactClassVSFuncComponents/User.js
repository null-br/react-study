import React from 'react';

const User = (props) => {
  return (
    <div>name: {props.children} | age: {props.age}</div>
  );
}

export default User;
