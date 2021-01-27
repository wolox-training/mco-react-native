import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

function Wishlist() {
  return (
    <View style={styles.wishlist}>
      <Text style={styles.wishlistMessage}>Estamos trabajando en esta pantalla 🛠</Text>
    </View>
  );
}

export default Wishlist;
