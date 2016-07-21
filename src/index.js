// Libary imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// User imports
import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const initialState = window.__DATA__;
const store = createStoreWithMiddleware(reducers, initialState,
  window.devToolsExtension && window.devToolsExtension()
);

console.log('here');

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes(store)} />
  </Provider>
, document.getElementById('main'));
