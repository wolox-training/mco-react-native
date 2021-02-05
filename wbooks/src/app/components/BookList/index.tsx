import React from 'react';
import { FlatList, SafeAreaView, ListRenderItem } from 'react-native';
import { Book } from '@interfaces/book';
import BookCell from '@components/BookCell';
import WithEmptySearch from '@components/WithEmptySearch';

import styles from './styles';

interface Props {
  books: Book[];
  searchString?: string;
  isSearched?: boolean;
}

function BookList({ books, searchString, isSearched }: Props) {
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCell book={item} />;

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          isSearched
            ? () => <WithEmptySearch isEmpty={(books.length < 1 && searchString) as boolean} />
            : undefined
        }
      />
    </SafeAreaView>
  );
}

export default BookList;
