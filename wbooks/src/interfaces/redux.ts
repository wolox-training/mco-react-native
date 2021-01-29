import { BookState } from './book';

export interface ReduxAction {
  type: string;
  payload: any;
}

export interface AppState {
  book: BookState;
}
