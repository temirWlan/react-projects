import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { housesReducer } from './reducers';


const reducer = combineReducers({ houses: housesReducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;