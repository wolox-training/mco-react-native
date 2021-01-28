import { BOOKS } from '@constants/types';

import { actionCreators } from './actions';

const initialState = {
  ok: false,
  data: []
};

interface Action {
  type: string;
}

export const bookReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case BOOKS.GET:
      return {
        ok: true,
        data: actionCreators.getBooks()
      };
    default:
      return state;
  }
};
