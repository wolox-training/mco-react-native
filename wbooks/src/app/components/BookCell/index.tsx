import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const BOOK_IMAGE = require('../../assets/img_book1.png');

function BookCell() {
  return (
    <View style={styles.container}>
      <Image source={BOOK_IMAGE} />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title}>
          Learn UX in 3 weeks
        </Text>
        <Text style={styles.subtitle}>Sofi Oksanen</Text>
      </View>
    </View>
  );
}

export default BookCell;
