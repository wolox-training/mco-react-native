import { completeState, createReducer, completeReducer, onReadValue } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  books: [],
  bookSearch: ''
};

const fullInitialState = completeState(initialState, ['bookSearch']);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {
    [actions.SEARCH_BOOKS]: onReadValue()
  }
};

export default createReducer(fullInitialState, completeReducer(reducerDescription));
