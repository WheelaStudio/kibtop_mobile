import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';
import { appFont } from '@/constants/fonts';

export default StyleSheet.create({
  container: {
    height: 45,
    flex: 1,
    backgroundColor: colors.brightGray,
    borderRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  input: {
    flex: 1,
    marginLeft: 13,
    fontSize: 16,
    lineHeight: 20,
    color: colors.dark,
    fontFamily: appFont.Semibold,
  },
});
