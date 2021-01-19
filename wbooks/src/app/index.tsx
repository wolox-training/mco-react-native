import React from 'react';
import { FlatList, SafeAreaView, StatusBar, ListRenderItem } from 'react-native';
import BookCell from '@components/BookCell';
import { Book } from '@interfaces/book';
import { BOOKS_MOCK } from '@constants/mockBooks';

const App = () => {
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell {...item} />;
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <FlatList data={BOOKS_MOCK} renderItem={renderBook} keyExtractor={keyExtractor} />
      </SafeAreaView>
    </>
  );
};

export default App;
