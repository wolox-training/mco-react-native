import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from '@interfaces/book';
import BookCell from '@components/BookCell';
import { ROUTES } from '@constants/routes';
import { Navigation } from '@interfaces/navigation';
import actionCreators from '@redux/books/actions';
import { AppState } from '@interfaces/redux';

import styles from './styles';

interface Props extends Navigation {}

function BookList({ navigation }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);
  const books = useSelector<AppState, Book[]>(state => state.book.books);
  const onBookPress: (book: Book) => void = book => navigation.navigate(ROUTES.BookDetail, book);
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} onBookPress={onBookPress} />;

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList data={books} renderItem={renderBook} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BookList;
