import React from 'react';
import { FlatList, SafeAreaView, ListRenderItem } from 'react-native';
import { Book } from '@interfaces/book';
import BookCell from '@components/BookCell';
import { BOOKS_MOCK } from '@constants/mockBooks';

function BookList() {
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell {...item} />;
  return (
    <SafeAreaView>
      <FlatList data={BOOKS_MOCK} renderItem={renderBook} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BookList;
