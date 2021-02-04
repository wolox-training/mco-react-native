import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import bookImage from '@assets/img_book1.png';
import { Book } from '@interfaces/book';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@constants/routes';

import styles from './styles';

interface Props {
  book: Book;
}

function BookCell({ book }: Props) {
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate(ROUTES.BookDetail, book);
  const { imageUrl, title, author } = book;
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
    </TouchableOpacity>
  );
}

export default BookCell;
