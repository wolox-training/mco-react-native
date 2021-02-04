import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '@interfaces/book';
import actionCreators from '@redux/books/actions';
import { AppState } from '@interfaces/redux';
import BookList from '@app/components/BookList';

function Library() {
  const dispatch = useDispatch();
  const books = useSelector<AppState, Book[]>(state => state.book.books);
  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  return <BookList books={books} />;
}

export default Library;
