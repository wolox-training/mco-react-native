import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';
import Reactotron from '@config/ReactotronConfig';

import book from './books/reducer';

const rootReducer = combineReducers({ book });
const middlewares = [applyMiddleware(thunk, fetchMiddleware)];

if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}

export default createStore(rootReducer, compose(...middlewares));
