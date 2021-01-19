import React from 'react';
import { Text, View, Image } from 'react-native';
import bookImage from '@assets/img_book1.png';
import { Book } from '@interfaces/book';

import styles from './styles';

function BookCell({ author, title, imageUrl }: Book) {
  return (
    <View style={styles.container}>
      <Image
        source={
          imageUrl
            ? {
                uri: imageUrl
              }
            : bookImage
        }
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>{author}</Text>
      </View>
    </View>
  );
}

export default BookCell;
