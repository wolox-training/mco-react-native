import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, ListRenderItem } from 'react-native';
import { Book } from '@interfaces/book';
import BookCell from '@components/BookCell';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

function BookList() {
  const navigation = useNavigation();
  const onBookPress: (book: Book) => void = book => navigation.navigate('BookDetail', book);
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} onBookPress={onBookPress} />;
  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList data={BOOKS_MOCK as any} renderItem={renderBook} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BookList;
