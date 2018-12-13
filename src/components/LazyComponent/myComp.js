import React from 'react';

const myComp = () => {
  console.log('lazy components');
  return (
    <div>Hi there I am now loaded!</div>
  );
}

export default myComp;
