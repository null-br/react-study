import React from 'react';

const ListsAndKeys = (props) => {
  return (
    <li>
      <span>name: {props.children} | age: {props.age}</span>
      <input type="text" onChange={props.changeEvent} value={props.children} />
      <button onClick={props.delEvent}>delete</button>
    </li>
  )
}

export default ListsAndKeys;
