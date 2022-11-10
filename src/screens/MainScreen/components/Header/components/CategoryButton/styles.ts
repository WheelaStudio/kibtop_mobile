import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { appFont } from '@/constants/fonts';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  title: {
    fontSize: 11,
    marginTop: 11,
    color: colors.dark,
    fontFamily: appFont.Semibold,
  },
  singleButton: {
    marginRight: 0
  }
});
