import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './src/App';
// import reducer from './src/Store/reducer';
// import reducer from './src/Store/reducerAB';
import * as reducer from './src/Store/index';
import reducerA from '/src/Store/reducerA';
import reducerB from '/src/Store/reducerB';

const rootStore = combineReducers({
  rA: reducerA,
  rB: reducerB,
});

const store = createStore(rootStore);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
