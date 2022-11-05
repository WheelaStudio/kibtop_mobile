import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { defaultFont } from '@/constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 11,
    color: colors.dark,
    fontFamily: defaultFont,
    fontWeight: '400'
  },
  titleFocused: {
    fontWeight: 'bold',
  },
});
