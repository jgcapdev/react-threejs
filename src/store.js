import { composeWithDevTools } from 'redux-devtools-extension';

import { textReducer } from './redux/reducers/textReducer.js';

import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  text: textReducer,
});

export const store = createStore(reducer, composeWithDevTools());
