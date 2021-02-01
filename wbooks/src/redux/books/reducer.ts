import { completeState, createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  books: []
};

const fullInitialState = completeState(initialState);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(fullInitialState, completeReducer(reducerDescription));
