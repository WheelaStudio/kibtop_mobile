import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { defaultFont } from '@/constants/fonts';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 65,
  },
  title: {
    fontSize: 11,
    marginTop: 11,
    color: colors.dark,
    fontFamily: defaultFont,
    fontWeight: '600',
  },
});
