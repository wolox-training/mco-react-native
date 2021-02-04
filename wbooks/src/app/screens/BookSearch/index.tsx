import React from 'react';
import { useSelector } from 'react-redux';
import WithEmptySearch from '@components/WithEmptySearch';
import BookList from '@components/BookList';
import { View } from 'react-native';

import { searchSelector, search } from './utils';
import styles from './styles';

function BookSearch() {
  const searchWord = useSelector(search);
  const searchResult = useSelector(searchSelector);
  return (
    <View style={styles.searchContainer}>
      <WithEmptySearch isEmpty={searchWord.length === 0}>
        <BookList books={searchResult} />
      </WithEmptySearch>
    </View>
  );
}

export default BookSearch;
