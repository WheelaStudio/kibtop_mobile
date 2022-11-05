import { colors } from '@/constants/colors';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    height: 171,
    width: width - 60,
    marginHorizontal: 7.5,
    backgroundColor: colors.gray,
    borderRadius: 20,
    paddingLeft: width / 2 - 60,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.dark,
    fontFamily: 'Open Sans',
  },
  description: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.dark,
    marginBottom: 13,
    fontFamily: 'Open Sans',
  },
  moreButtonContainer: {
    flexDirection: 'row',
  },
  moreButtonTitle: {
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 2.59,
    marginRight: 5,
    color: colors.dark,
    fontFamily: 'Open Sans',
  },
});
