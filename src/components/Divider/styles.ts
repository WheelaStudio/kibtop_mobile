import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  divider: {
    height: 1,
    width: width - 30,
    marginHorizontal: 15,
    backgroundColor: colors.lightGray,
    marginBottom: 15,
  },
});
