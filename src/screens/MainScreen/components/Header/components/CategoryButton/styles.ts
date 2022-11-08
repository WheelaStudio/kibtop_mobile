import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { appFont } from '@/constants/fonts';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  title: {
    fontSize: 11,
    marginTop: 11,
    color: colors.dark,
    fontFamily: appFont.Regular,
  },
  singleButton: {
    marginRight: 0
  }
});
