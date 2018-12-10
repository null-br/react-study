import React from 'react';

const styles = {
  default: {
    backgroundColor: '#737373',
    color: '#eae8e8',
    padding: '10px',
  }
}

const ButtonOne = () => {
  return (
    <div>
      <p>ButtonOne: 只有默认样式</p>
      <button style={styles.default}>ButtonOne</button>
    </div>
  );
}

export default ButtonOne;
