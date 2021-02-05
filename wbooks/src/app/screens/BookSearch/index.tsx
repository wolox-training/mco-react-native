import React from 'react';
import { useSelector } from 'react-redux';
import BookList from '@components/BookList';
import { View } from 'react-native';

import { searchSelector, search } from './utils';
import styles from './styles';

function BookSearch() {
  const searchWord = useSelector(search);
  const searchResult = useSelector(searchSelector);
  const filteredBooks = searchWord.length < 1 ? [] : searchResult;
  return (
    <View style={styles.searchContainer}>
      <BookList books={filteredBooks} searchString={searchWord} isSearched />
    </View>
  );
}

export default BookSearch;
