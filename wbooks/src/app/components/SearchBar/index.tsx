import React from 'react';
import { Image, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import searchIcon from '@assets/ic_search_placeholder.png';
import deleteIcon from '@assets/times-circle-solid.png';
import { actionCreators } from '@redux/books/actions';

import styles from './styles';

function SearchBar() {
  // const [search, setSearch] = useState('');
  // const onChangeText = (text: string) => setSearch(text);
  // const onPressDelete = () => setSearch('');

  const dispatch = useDispatch();
  const onChangeText = (text: string) => dispatch(actionCreators.searchBooks(text));
  const onPressDelete = () => dispatch(actionCreators.searchBooks(''));
  const search = useSelector((state: any) => state.book.bookSearch);
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
