import React from 'react';
import { Image, View, Text } from 'react-native';
import searchIcon from '@assets/ic_search_placeholder.png';

import styles from './styles';

interface Props {
  isEmpty: boolean;
}

function WithEmptySearch({ isEmpty }: Props) {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.image} />
      <Text style={styles.title}>{isEmpty ? 'No book was found' : 'Search in Wbooks'}</Text>
      <Text style={styles.subtitle}>
        {isEmpty ? 'Please try again.' : 'Find your favorite writers and books!'}
      </Text>
    </View>
  );
}

export default WithEmptySearch;
