import React, { useState } from 'react';
import { Image, View, TextInput, TouchableOpacity } from 'react-native';
import searchIcon from '@assets/ic_search_placeholder.png';
import deleteIcon from '@assets/ic_search.png';

import styles from './styles';

function SearchBar() {
  const [search, setSearch] = useState('');
  const onChangeText = (text: string) => setSearch(text);
  const onPressDelete = () => setSearch('');

  return (
    <View style={styles.container}>
      <Image style={styles.searchIcon} source={searchIcon} />
      <TextInput value={search} style={styles.input} onChangeText={onChangeText} placeholder="Search" />
      <TouchableOpacity onPress={onPressDelete}>
        <Image style={styles.deleteIcon} source={deleteIcon} />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;
