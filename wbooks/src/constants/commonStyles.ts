import { TextStyle, ViewStyle } from 'react-native';
import { BLACK, TUNDORA } from '@constants/colors';

import { FONT_LIGHT } from './fontWeights';

export const BUTTON: ViewStyle = {
  width: 250,
  height: 44,
  borderRadius: 22,
  justifyContent: 'center'
};

export const GREY_TEXT: TextStyle = {
  fontSize: 15,
  fontWeight: FONT_LIGHT,
  color: TUNDORA
};

export const SHADOW = {
  shadowColor: BLACK,
  shadowOpacity: 0.15,
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowRadius: 1,
  elevation: 1
};
