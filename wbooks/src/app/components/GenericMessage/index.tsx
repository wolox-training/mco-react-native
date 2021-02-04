import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
}

function GenericMessage({ text }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default GenericMessage;
