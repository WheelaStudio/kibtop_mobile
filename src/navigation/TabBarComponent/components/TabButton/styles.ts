import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { appFont } from '@/constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 11,
    color: colors.dark,
    fontFamily: appFont.Regular,
  },
  titleFocused: {
    fontFamily: appFont.Bold,
  },
});
