import React, { Fragment } from 'react';
import Child from './child';

const parent = (props) => {
  return (
    <Fragment>
      {props.type === 'parent' ?
        <Fragment>
          <p>这是grandfather，father和child之间的通信</p>
          <Child {...props} />
        </Fragment> : ""
      }
      {props.type === 'sibling' ?
        <Fragment>
          <p>这是兄弟组件间的通信</p>
          <Child doSomeThing={props.changeTheWorldEvent} title={props.title}/>
          <Child doSomeThing={props.keepTheWorldSameEvent} title={props.title}/>
        </Fragment> : ""
      }

    </Fragment>
  );
}

export default parent;
