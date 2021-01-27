import { StyleSheet } from 'react-native';
import { CERULEAN, WHITE } from '@constants/colors';

export default StyleSheet.create({
  wishlist: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE
  },
  wishlistMessage: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    color: CERULEAN
  }
});
