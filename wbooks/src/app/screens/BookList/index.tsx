import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Book } from '@interfaces/book';
import BookCell from '@components/BookCell';
import { ROUTES } from '@constants/routes';
import actionCreators from '@redux/books/actions';
import { AppState } from '@interfaces/redux';

import styles from './styles';

interface Props {
  books: Book[];
}

function BookList({ books }: Props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const booksStore = useSelector<AppState, Book[]>(state => state.book.books);
  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);
  const onBookPress: (book: Book) => void = book => navigation.navigate(ROUTES.BookDetail, book);
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} onBookPress={onBookPress} />;

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList data={books ? books : booksStore} renderItem={renderBook} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BookList;
