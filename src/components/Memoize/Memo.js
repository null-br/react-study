import React from 'react';

// if u want use lazy component , u react version must >= 16.6.0

const MemoComp = React.memo((props) => {

  /* only rerenders if props change */
  console.log('MyComponent');
  return (
    <div>
      {props.age}
    </div>
  );
});
export default MemoComp;

