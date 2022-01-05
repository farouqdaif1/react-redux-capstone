import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import homeReducer from './Homepage/home';

const reducer = combineReducers({ homeReducer });
const store = createStore(reducer,
  applyMiddleware(logger, thunk));
export default store;
