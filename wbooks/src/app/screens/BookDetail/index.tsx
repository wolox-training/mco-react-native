import React from 'react';
import { Book } from '@interfaces/book';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, Image } from 'react-native';
import bookImage from '@assets/img_book1.png';
import { CERULEAN, TURQUOISE } from '@constants/colors';

import styles from './styles';

interface Props {
  route: {
    params: Book;
  };
}

function BookDetail({ route }: Props) {
  const { imageUrl, author, title, year, genre } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
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
        <View style={styles.textsContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.availability}>Unavailable</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.year}>{year}</Text>
          <Text style={styles.genre}>{genre}</Text>
        </View>
      </View>
      <View style={styles.wishButton}>
        <Text style={styles.wishButtonText}>ADD TO WISHLIST</Text>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[CERULEAN, TURQUOISE]}
        style={styles.rentButton}>
        <Text style={styles.rentButtonText}>RENT</Text>
      </LinearGradient>
    </View>
  );
}

export default BookDetail;
