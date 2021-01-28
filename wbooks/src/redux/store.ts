import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/ReactotronConfig';

import { bookReducer } from './books/reducer';

const rootReducer = combineReducers({
  bookReducer
});

export default createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));
