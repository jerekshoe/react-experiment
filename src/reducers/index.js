import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function count(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  count,
  routing: routerReducer,
});

export default rootReducer;
