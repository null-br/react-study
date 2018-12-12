import React from 'react';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './src/App';
import * as reducer from './src/Store/Reducer/index';

const rootStore = combineReducers({
  ...reducer,
});

// const store = createStore(rootStore);

// 手写一个简单的middleware
const logAction = store => next => action => {
  // applyMiddleware dispatch action and catch action, we do some operate and return action
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};
// const store = createStore(rootStore, applyMiddleware(logAction));

const store = createStore(rootStore, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
