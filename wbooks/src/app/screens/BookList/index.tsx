import React from 'react';
import { FlatList, SafeAreaView, ListRenderItem } from 'react-native';
import { Book } from '@interfaces/book';
import BookCell from '@components/BookCell';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { ROUTES } from '@constants/routes';
import { Navigation } from '@interfaces/navigation';

import styles from './styles';

interface Props extends Navigation {}

function BookList({ navigation }: Props) {
  const onBookPress: (book: Book) => void = book => navigation.navigate(ROUTES.BookDetail, book);
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} onBookPress={onBookPress} />;

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList data={BOOKS_MOCK as Book[]} renderItem={renderBook} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BookList;
