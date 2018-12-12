import React from 'react';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './src/App';
// import reducer from './src/Store/reducer';
// import reducer from './src/Store/reducerAB';
import * as reducer from './src/Store/index';

const rootStore = combineReducers({
  ...reducer,
});

const logAction = store => {
  console.log(store);
  // applyMiddleware dispatch action and catch action, we do some operate and return action
  return dispatch => {
    console.log(dispatch);
    return action => {
      const result = dispatch(action);
      console.log(action);
      console.log(result);
    }
  }
};
const store = createStore(rootStore, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
