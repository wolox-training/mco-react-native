import React from 'react';
import { FlatList, SafeAreaView, ListRenderItem } from 'react-native';
import { Book } from '@interfaces/book';
import BookCell from '@components/BookCell';

import styles from './styles';

interface Props {
  books: Book[];
}

function BookList({ books }: Props) {
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} />;

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList data={books} renderItem={renderBook} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BookList;
