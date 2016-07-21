// Libary imports
import React from 'react';
import { Route } from 'react-router';

// User imports
import App from './containers/App';
import Counter from './containers/Counter';

const Greeting1 = () => (
  <div>Hey there!</div>
);

const Greeting2 = () => (
  <div>Hey there2!</div>
);

const Greeting3 = () => (
  <div>Hey there3!</div>
);

export default (store) => (
  <Route path="/" component={App} store={store}>
    <Route path="/greet1" component={Counter} />
    <Route path="/greet2" component={Greeting2} />
    <Route path="/greet3" component={Greeting3} />
  </Route>
);
