import { StyleSheet } from 'react-native';
import { BLACK, POLAR } from '@constants/colors';
import { FONT_HEAVY } from '@constants/fontWeights';

export default StyleSheet.create({
  container: {
    backgroundColor: POLAR,
    height: '100%',
    justifyContent: 'center'
  },
  text: {
    fontWeight: FONT_HEAVY,
    fontSize: 20,
    color: BLACK,
    alignSelf: 'center',
    marginVertical: 20
  }
});
