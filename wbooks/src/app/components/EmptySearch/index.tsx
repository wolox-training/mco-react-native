import React from 'react';
import { Image, View, Text } from 'react-native';
import searchIcon from '@assets/ic_search_placeholder.png';

import styles from './styles';

function EmptySearch() {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.image} />
      <Text style={styles.title}>Search in Wbooks</Text>
      <Text style={styles.subtitle}>Find your favorite writers and books!</Text>
    </View>
  );
}

export default EmptySearch;
